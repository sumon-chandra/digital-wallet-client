import SignupPage from "@/pages/signup";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__main/signup")({
	component: SignupPage,
});
