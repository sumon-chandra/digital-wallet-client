import AboutPage from "@/pages/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__main/about")({
	component: AboutPage,
});
