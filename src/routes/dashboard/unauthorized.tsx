import Unauthorized from "@/pages/dashboard/unauthorized";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/unauthorized")({
	component: Unauthorized,
});
