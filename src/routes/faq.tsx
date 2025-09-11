import FAQPage from "@/pages/faq";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
	component: FAQPage,
});
