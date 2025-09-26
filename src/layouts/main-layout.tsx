import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Outlet } from "@tanstack/react-router";

const MainLayout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
