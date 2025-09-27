import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, ArrowUpDown, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { mockData } from "@/data/admin";

export default function DashboardAdminHome() {
	const getStatusBadge = (status: string) => {
		switch (status) {
			case "active":
			case "approved":
			case "completed":
				return (
					<Badge variant="default" className="bg-green-100 text-green-800">
						{status === "active" ? "Active" : status === "approved" ? "Approved" : "Completed"}
					</Badge>
				);
			case "pending":
				return (
					<Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
						Pending
					</Badge>
				);
			case "blocked":
			case "suspended":
				return <Badge variant="destructive">{status === "blocked" ? "Blocked" : "Suspended"}</Badge>;
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};
	return (
		<div className="grid gap-4">
			{/* System Overview Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Users</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{mockData.totalUsers.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">+12% from last month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Agents</CardTitle>
						<UserPlus className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{mockData.totalAgents}</div>
						<p className="text-xs text-muted-foreground">+3 new this month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
						<ArrowUpDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{mockData.totalTransactions.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">+8% from last month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Transaction Volume</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">${mockData.totalVolume.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">+15% from last month</p>
					</CardContent>
				</Card>
			</div>

			{/* Alerts and Pending Actions */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<AlertTriangle className="h-5 w-5 text-yellow-600" />
							Pending Approvals
						</CardTitle>
						<CardDescription>Items requiring your attention</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							<div className="flex items-center justify-between p-3 border rounded-lg">
								<div>
									<p className="font-medium">Agent Applications</p>
									<p className="text-sm text-muted-foreground">New agent registrations</p>
								</div>
								<Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
									{mockData.pendingApprovals}
								</Badge>
							</div>
							<div className="flex items-center justify-between p-3 border rounded-lg">
								<div>
									<p className="font-medium">System Alerts</p>
									<p className="text-sm text-muted-foreground">Security and system issues</p>
								</div>
								<Badge variant="destructive">{mockData.systemAlerts}</Badge>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
						<CardDescription>Common administrative tasks</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-3">
							<Button className="h-16 flex-col gap-1 bg-transparent" variant="outline">
								<Users className="h-4 w-4" />
								<span className="text-xs">Manage Users</span>
							</Button>
							<Button className="h-16 flex-col gap-1 bg-transparent" variant="outline">
								<UserPlus className="h-4 w-4" />
								<span className="text-xs">Manage Agents</span>
							</Button>
							<Button className="h-16 flex-col gap-1 bg-transparent" variant="outline">
								<ArrowUpDown className="h-4 w-4" />
								<span className="text-xs">View Transactions</span>
							</Button>
							<Button className="h-16 flex-col gap-1 bg-transparent" variant="outline">
								<TrendingUp className="h-4 w-4" />
								<span className="text-xs">System Settings</span>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Recent Activity Tables */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{/* Recent Users */}
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<div>
							<CardTitle>Recent Users</CardTitle>
							<CardDescription>Latest user registrations</CardDescription>
						</div>
						<Button variant="outline" size="sm">
							View All
						</Button>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{mockData.recentUsers.map((user) => (
								<div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
									<div>
										<p className="font-medium">{user.name}</p>
										<p className="text-sm text-muted-foreground">{user.email}</p>
										<p className="text-xs text-muted-foreground">Joined {user.joinDate}</p>
									</div>
									<div className="text-right">{getStatusBadge(user.status)}</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Recent Agents */}
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<div>
							<CardTitle>Recent Agents</CardTitle>
							<CardDescription>Latest agent applications</CardDescription>
						</div>
						<Button variant="outline" size="sm">
							View All
						</Button>
					</CardHeader>
					<CardContent>
						<div className="space-y-3">
							{mockData.recentAgents.map((agent) => (
								<div key={agent.id} className="flex items-center justify-between p-3 border rounded-lg">
									<div>
										<p className="font-medium">{agent.name}</p>
										<p className="text-sm text-muted-foreground">{agent.email}</p>
										<p className="text-xs text-muted-foreground">Applied {agent.joinDate}</p>
									</div>
									<div className="text-right">{getStatusBadge(agent.status)}</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Recent Transactions */}
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Recent Transactions</CardTitle>
						<CardDescription>Latest system transactions</CardDescription>
					</div>
					<Button variant="outline" size="sm">
						View All
					</Button>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{mockData.recentTransactions.map((transaction) => (
							<div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
										<ArrowUpDown className="h-4 w-4 text-primary" />
									</div>
									<div>
										<p className="font-medium capitalize">{transaction.type}</p>
										<p className="text-sm text-muted-foreground">
											{transaction.from} → {transaction.to}
										</p>
										<p className="text-xs text-muted-foreground">{transaction.date}</p>
									</div>
								</div>
								<div className="text-right">
									<p className="font-medium">${transaction.amount.toFixed(2)}</p>
									{getStatusBadge(transaction.status)}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
