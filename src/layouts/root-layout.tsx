import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<>
		<Navigation />
		<Outlet />
		<Footer />
		<Toaster richColors theme="system" closeButton />
		<TanStackRouterDevtools />
	</>
);

export default RootLayout;
