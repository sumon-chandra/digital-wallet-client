import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<>
		<Navigation />
		<Outlet />
		<Footer />
		<TanStackRouterDevtools />
	</>
);

export default RootLayout;
