import DashboardPage from "@/pages/dashboard/dashboard-page";
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw Navigate({
				to: "/login",
			});
		}
		if (context.auth.role === "ADMIN" || context.auth.role === "AGENT") {
			throw Navigate({
				to: "/dashboard/unauthorized",
			});
		}
	},
	component: DashboardPage,
});
