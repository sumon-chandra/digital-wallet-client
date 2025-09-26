import { LayoutDashboard, CreditCard, ArrowUpDown, History, Users, Wallet, UserPlus, Shield, BarChart3, DollarSign } from "lucide-react";

export const userNavigation = [
	{
		title: "Dashboard",
		url: "/user",
		icon: LayoutDashboard,
	},
	{
		title: "Deposit Money",
		url: "/user/deposit",
		icon: CreditCard,
	},
	{
		title: "Withdraw Money",
		url: "/user/withdraw",
		icon: DollarSign,
	},
	{
		title: "Send Money",
		url: "/user/send",
		icon: ArrowUpDown,
	},
	{
		title: "Transaction History",
		url: "/user/transactions",
		icon: History,
	},
];

export const agentNavigation = [
	{
		title: "Dashboard",
		url: "/agent",
		icon: LayoutDashboard,
	},
	{
		title: "Add Money",
		url: "/agent/add-money",
		icon: Wallet,
	},
	{
		title: "Withdraw Money",
		url: "/agent/withdraw-money",
		icon: DollarSign,
	},
	{
		title: "Transactions",
		url: "/agent/transactions",
		icon: History,
	},
	{
		title: "Commission History",
		url: "/agent/commission",
		icon: BarChart3,
	},
];

export const adminNavigation = [
	{
		title: "Dashboard",
		url: "/admin",
		icon: LayoutDashboard,
	},
	{
		title: "Manage Users",
		url: "/admin/users",
		icon: Users,
	},
	{
		title: "Manage Agents",
		url: "/admin/agents",
		icon: UserPlus,
	},
	{
		title: "All Transactions",
		url: "/admin/transactions",
		icon: History,
	},
	{
		title: "System Settings",
		url: "/admin/settings",
		icon: Shield,
	},
];
