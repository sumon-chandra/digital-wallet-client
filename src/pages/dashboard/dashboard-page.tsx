import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import DashboardUserHome from "./users/home";

const Dashboard = () => {
	const { user } = useAuth();
	return (
		<DashboardLayout>
			{user?.role === "ADMIN" ? <div>Admin Dashboard</div> : user?.role === "AGENT" ? <div>Agent Dashboard</div> : <DashboardUserHome />}
		</DashboardLayout>
	);
};

export default Dashboard;
