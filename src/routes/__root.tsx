import type { AuthContext } from "@/hooks/useAuth";
import RootLayout from "@/layouts/root-layout";
import NotFound from "@/pages/not-found";
import { createRootRouteWithContext } from "@tanstack/react-router";

type RootContext = {
	auth: AuthContext;
};

export const Route = createRootRouteWithContext<RootContext>()({
	component: RootLayout,
	notFoundComponent: () => <NotFound />,
});
