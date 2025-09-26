import LoginPage from "@/pages/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__main/login")({
	component: LoginPage,
});
