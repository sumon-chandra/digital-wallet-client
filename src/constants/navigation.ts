import { LayoutDashboard, CreditCard, ArrowUpDown, History, Users, Wallet, UserPlus, Shield, BarChart3, DollarSign } from "lucide-react";

export const userNavigation = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Deposit Money",
		url: "/dashboard/deposit",
		icon: CreditCard,
	},
	{
		title: "Withdraw Money",
		url: "/dashboard/withdraw",
		icon: DollarSign,
	},
	{
		title: "Send Money",
		url: "/dashboard/send",
		icon: ArrowUpDown,
	},
	{
		title: "Transaction History",
		url: "/dashboard/transactions",
		icon: History,
	},
];

export const agentNavigation = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Add Money",
		url: "/dashboard/add-money",
		icon: Wallet,
	},
	{
		title: "Withdraw Money",
		url: "/dashboard/withdraw-money",
		icon: DollarSign,
	},
	{
		title: "Transactions",
		url: "/dashboard/transactions",
		icon: History,
	},
	{
		title: "Commission History",
		url: "/dashboard/commission",
		icon: BarChart3,
	},
];

export const adminNavigation = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Manage Users",
		url: "/dashboard/users",
		icon: Users,
	},
	{
		title: "Manage Agents",
		url: "/dashboard/agents",
		icon: UserPlus,
	},
	{
		title: "All Transactions",
		url: "/dashboard/transactions",
		icon: History,
	},
	{
		title: "System Settings",
		url: "/dashboard/settings",
		icon: Shield,
	},
];
