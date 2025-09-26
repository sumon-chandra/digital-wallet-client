import ContactPage from "@/pages/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__main/contact")({
	component: ContactPage,
});
