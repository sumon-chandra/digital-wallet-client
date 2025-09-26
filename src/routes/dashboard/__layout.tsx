import { DashboardLayout } from "@/layouts/dashboard-layout";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/__layout")({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({ to: "/login" });
		}
	},
	component: DashboardLayout,
});
