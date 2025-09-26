import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeftIcon, ShieldAlertIcon, ShieldEllipsis } from "lucide-react";

const Unauthorized: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	const handleGoBack = () => {
		navigate({ to: window.history.back()! });
	};

	const handleGoToDashboard = () => {
		navigate({ to: "/dashboard" });
	};

	const getRoleColor = () => {
		switch (user?.role) {
			case "admin":
				return "text-purple-600";
			case "agent":
				return "text-blue-600";
			case "user":
				return "text-green-600";
			default:
				return "text-gray-600";
		}
	};

	const getRoleBadgeColor = () => {
		switch (user?.role) {
			case "admin":
				return "bg-purple-100 text-purple-800";
			case "agent":
				return "bg-blue-100 text-blue-800";
			case "user":
				return "bg-green-100 text-green-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
					<div className="text-center">
						{/* Error Icon */}
						<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
							<ShieldEllipsis className="h-8 w-8 text-red-600" />
						</div>

						{/* Error Title */}
						<h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>

						{/* Error Message */}
						<div className="mb-6">
							<p className="text-gray-600 mb-4">You don't have permission to access this page.</p>

							{user && (
								<div className="bg-gray-50 rounded-lg p-4 mb-4">
									<div className="flex items-center justify-center space-x-2 mb-2">
										<span className="text-sm text-gray-500">Current Role:</span>
										<span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleBadgeColor()}`}>
											{user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}
										</span>
									</div>
									<p className="text-sm text-gray-500">
										Logged in as <span className={`font-medium ${getRoleColor()}`}>{user.name}</span>
									</p>
								</div>
							)}

							<div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
								<div className="flex items-start">
									<ShieldAlertIcon className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
									<div className="text-sm text-amber-800">
										<p className="font-medium mb-1">Why am I seeing this?</p>
										<p>This page is restricted to specific user roles. Contact your administrator if you believe you should have access to this resource.</p>
									</div>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="space-y-3">
							<button
								onClick={handleGoToDashboard}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
							>
								Go to Dashboard
							</button>

							<button
								onClick={handleGoBack}
								className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
							>
								<ArrowLeftIcon className="h-4 w-4 mr-2" />
								Go Back
							</button>
						</div>

						{/* Help Text */}
						<div className="mt-6 text-center">
							<p className="text-xs text-gray-500">Need help? Contact support or your system administrator.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Unauthorized;
