import UsersPage from "@/pages/dashboard/admin/users";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/users")({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: "/login",
				search: (old) => ({ ...old, redirectTo: "/dashboard/users" }),
			});
		}
		if (context.auth.user?.role !== "ADMIN") {
			throw redirect({
				to: "/dashboard/unauthorized",
				search: (old) => ({ ...old, redirectTo: "/dashboard/users" }),
			});
		}
	},
	component: UsersPage,
});
