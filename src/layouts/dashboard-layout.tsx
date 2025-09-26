import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useAuth } from "@/hooks/useAuth";
import { getDashboardBreadcrumbs } from "@/utils/get-dashboard-breadcrumbs";

export function DashboardLayout({ children }: { children?: React.ReactNode }) {
	const { user } = useAuth();
	if (!user) {
		// eslint-disable-next-line no-console
		console.log("User not found");
		return null;
	}
	const breadcrumbs = getDashboardBreadcrumbs(user.role);

	return (
		<SidebarProvider>
			<AppSidebar userRole={user.role} userName={user.name} userEmail={user.email} />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						{breadcrumbs.length > 0 && (
							<Breadcrumb>
								<BreadcrumbList>
									{breadcrumbs.map((breadcrumb, index) => (
										<div key={index} className="flex items-center gap-2">
											<BreadcrumbItem className="hidden md:block">
												{breadcrumb.href ? (
													<BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
												) : (
													<BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
												)}
											</BreadcrumbItem>
											{index < breadcrumbs.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
										</div>
									))}
								</BreadcrumbList>
							</Breadcrumb>
						)}
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
