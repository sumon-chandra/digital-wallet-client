import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import DashboardUserHome from "./users/home";
import DashboardAgentHome from "./agent/home";
import DashboardAdminHome from "./admin/home";

const Dashboard = () => {
	const { user } = useAuth();
	return (
		<DashboardLayout>
			{user?.role === "ADMIN" ? <DashboardAdminHome /> : user?.role === "AGENT" ? <DashboardAgentHome /> : <DashboardUserHome />}
		</DashboardLayout>
	);
};

export default Dashboard;
