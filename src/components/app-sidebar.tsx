import type * as React from "react";
import { Settings, LogOut, Wallet, User } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { adminNavigation, agentNavigation, userNavigation } from "@/constants/navigation";
import { useLogoutMutation } from "@/redux/api/auth";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
	userRole: string;
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
}

export function AppSidebar({ userRole, userName = "John Doe", userEmail = "john@example.com", userAvatar, ...props }: AppSidebarProps) {
	const [logout] = useLogoutMutation();
	const navigate = useNavigate();
	const getNavigation = () => {
		switch (userRole) {
			case "USER":
				return userNavigation;
			case "AGENT":
				return agentNavigation;
			case "ADMIN":
				return adminNavigation;
			default:
				return userNavigation;
		}
	};

	const getRoleTitle = () => {
		switch (userRole) {
			case "USER":
				return "User Portal";
			case "AGENT":
				return "Agent Portal";
			case "ADMIN":
				return "Admin Portal";
			default:
				return "Dashboard";
		}
	};

	const getProfileUrl = () => {
		switch (userRole) {
			case "USER":
				return "/user/profile";
			case "AGENT":
				return "/agent/profile";
			case "ADMIN":
				return "/admin/profile";
			default:
				return "/user/profile";
		}
	};

	const navigation = getNavigation();

	const handleLogout = () => {
		logout(null);
		toast.success("Logged out successfully!");
		navigate({ to: "/login" });
	};

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<div className="flex items-center gap-2 px-4 py-2">
					<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
						<Wallet className="size-4" />
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">FinanceApp</span>
						<span className="truncate text-xs text-sidebar-foreground/70">{getRoleTitle()}</span>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{navigation.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
										<AvatarFallback className="rounded-lg">
											{userName
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">{userName}</span>
										<span className="truncate text-xs">{userEmail}</span>
									</div>
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg" side="bottom" align="end" sideOffset={4}>
								<DropdownMenuItem asChild>
									<a href={getProfileUrl()}>
										<Settings className="mr-2 h-4 w-4" />
										<span>Account Settings</span>
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<a href={getProfileUrl()}>
										<User className="mr-2 h-4 w-4" />
										<span>Profile</span>
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={handleLogout} className="text-destructive">
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
