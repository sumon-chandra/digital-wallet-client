import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import DashboardUserHome from "./users/home";
import DashboardAgentHome from "./agent/home";

const Dashboard = () => {
	const { user } = useAuth();
	return (
		<DashboardLayout>
			{user?.role === "ADMIN" ? <div>Admin Dashboard</div> : user?.role === "AGENT" ? <DashboardAgentHome /> : <DashboardUserHome />}
		</DashboardLayout>
	);
};

export default Dashboard;
