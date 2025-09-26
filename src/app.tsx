import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth, type AuthContext } from "./hooks/useAuth";

const router = createRouter({ routeTree, context: { auth: undefined! as AuthContext } });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	const auth = useAuth();
	return <RouterProvider router={router} context={{ auth }} />;
};

export default App;
