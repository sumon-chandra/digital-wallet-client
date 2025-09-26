import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Send, Eye, Plus, Minus, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { mockData } from "@/data/users";
import { Badge } from "@/components/ui/badge";

const DashboardUserHome = () => {
	const getTransactionIcon = (type: string) => {
		switch (type) {
			case "received":
				return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
			case "sent":
				return <ArrowUpRight className="h-4 w-4 text-red-600" />;
			case "deposit":
				return <Plus className="h-4 w-4 text-blue-600" />;
			case "withdraw":
				return <Minus className="h-4 w-4 text-orange-600" />;
			default:
				return <ArrowUpRight className="h-4 w-4" />;
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
			{/* Wallet Balance Card */}
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
					<Wallet className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">${mockData.balance.toFixed(2)}</div>
					<p className="text-xs text-muted-foreground">Available balance</p>
				</CardContent>
			</Card>

			{/* Quick Actions */}
			<Card>
				<CardHeader>
					<CardTitle>Quick Actions</CardTitle>
					<CardDescription>Manage your money with these quick actions</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Plus className="h-5 w-5" />
							<span className="text-sm">Deposit</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Minus className="h-5 w-5" />
							<span className="text-sm">Withdraw</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Send className="h-5 w-5" />
							<span className="text-sm">Send Money</span>
						</Button>
						<Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
							<Eye className="h-5 w-5" />
							<span className="text-sm">View History</span>
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* Recent Transactions */}
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Recent Transactions</CardTitle>
						<CardDescription>Your latest financial activities</CardDescription>
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
									{getTransactionIcon(transaction.type)}
									<div>
										<p className="font-medium capitalize">{transaction.type}</p>
										<p className="text-sm text-muted-foreground">
											{transaction.type === "sent"
												? `To: ${transaction.to}`
												: transaction.type === "received"
												? `From: ${transaction.from}`
												: transaction.type === "deposit"
												? transaction.from
												: transaction.to}
										</p>
										<p className="text-xs text-muted-foreground">{transaction.date}</p>
									</div>
								</div>
								<div className="text-right">
									<p className={`font-medium ${transaction.type === "received" || transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}>
										{transaction.type === "received" || transaction.type === "deposit" ? "+" : "-"}${transaction.amount.toFixed(2)}
									</p>
									{getStatusBadge(transaction.status)}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default DashboardUserHome;
