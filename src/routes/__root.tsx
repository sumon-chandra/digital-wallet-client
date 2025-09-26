import type { AuthContext } from "@/hooks/useAuth";
import RootLayout from "@/layouts/root-layout";
import { createRootRouteWithContext } from "@tanstack/react-router";

type RootContext = {
	auth: AuthContext;
};

export const Route = createRootRouteWithContext<RootContext>()({
	component: RootLayout,
});
