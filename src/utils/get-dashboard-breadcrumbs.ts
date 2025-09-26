interface BreadcrumbsTypes {
	label: string;
	href?: string;
}
export function getDashboardBreadcrumbs(role: string) {
	let breadcrumbs: BreadcrumbsTypes[] = [];

	if (role === "ADMIN") {
		breadcrumbs = [{ label: "Admin Portal", href: "/dashboard" }, { label: "Dashboard" }];
	}

	if (role === "AGENT") {
		breadcrumbs = [{ label: "Agent Portal", href: "/dashboard" }, { label: "Dashboard" }];
	}

	if (role === "USER") {
		breadcrumbs = [{ label: "User Portal", href: "/dashboard" }, { label: "Dashboard" }];
	}
	return breadcrumbs;
}
