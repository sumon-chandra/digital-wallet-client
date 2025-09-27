import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, DollarSign, Plus, Minus, Eye } from "lucide-react";
import { mockData } from "@/data/agent";

export default function DashboardAgentHome() {
	const getActivityIcon = (type: string) => {
		switch (type) {
			case "cash-in":
				return <Plus className="h-4 w-4 text-green-600" />;
			case "cash-out":
				return <Minus className="h-4 w-4 text-red-600" />;
			default:
				return <DollarSign className="h-4 w-4" />;
		}
	};

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "completed":
				return (
					<Badge variant="default" className="bg-green-100 text-green-800">
						Completed
					</Badge>
				);
			case "pending":
				return (
					<Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
						Pending
					</Badge>
				);
			case "failed":
				return <Badge variant="destructive">Failed</Badge>;
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	return (
		<div className="grid gap-4">
			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Cash-In</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">${mockData.totalCashIn.toFixed(2)}</div>
						<p className="text-xs text-muted-foreground">This month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Cash-Out</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600">${mockData.totalCashOut.toFixed(2)}</div>
						<p className="text-xs text-muted-foreground">This month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-primary">${mockData.commission.toFixed(2)}</div>
						<p className="text-xs text-muted-foreground">This month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Users</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{mockData.activeUsers}</div>
						<p className="text-xs text-muted-foreground">Served this month</p>
					</CardContent>
				</Card>
			</div>

			{/* Quick Actions */}
			<Card>
				<CardHeader>
					<CardTitle>Quick Actions</CardTitle>
					<CardDescription>Manage user transactions with these quick actions</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Plus className="h-5 w-5" />
							<span className="text-sm">Add Money</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Minus className="h-5 w-5" />
							<span className="text-sm">Withdraw Money</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Eye className="h-5 w-5" />
							<span className="text-sm">View Transactions</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<DollarSign className="h-5 w-5" />
							<span className="text-sm">Commission</span>
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* Recent Activity */}
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Recent Activity</CardTitle>
						<CardDescription>Latest transactions handled by you</CardDescription>
					</div>
					<Button variant="outline" size="sm">
						View All
					</Button>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{mockData.recentActivity.map((activity) => (
							<div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
								<div className="flex items-center gap-3">
									{getActivityIcon(activity.type)}
									<div>
										<p className="font-medium capitalize">{activity.type.replace("-", " ")}</p>
										<p className="text-sm text-muted-foreground">
											{activity.user} • {activity.phone}
										</p>
										<p className="text-xs text-muted-foreground">{activity.date}</p>
									</div>
								</div>
								<div className="text-right">
									<p className={`font-medium ${activity.type === "cash-in" ? "text-green-600" : "text-red-600"}`}>
										{activity.type === "cash-in" ? "+" : "-"}${activity.amount.toFixed(2)}
									</p>
									{getStatusBadge(activity.status)}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
