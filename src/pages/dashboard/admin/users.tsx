import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter, Search, MoreHorizontal, UserCheck, UserX, Eye, Download } from "lucide-react";
import { useState } from "react";
import type { IDemoUser } from "@/interfaces/users";
import { mockUsers } from "@/data/admin";
import { DashboardLayout } from "@/layouts/dashboard-layout";

export default function UsersPage() {
	const [users, setUsers] = useState(mockUsers as IDemoUser[]);
	const [filterStatus, setFilterStatus] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "active":
				return (
					<Badge variant="default" className="bg-green-100 text-green-800">
						Active
					</Badge>
				);
			case "inactive":
				return (
					<Badge variant="secondary" className="bg-gray-100 text-gray-800">
						Inactive
					</Badge>
				);
			case "blocked":
				return <Badge variant="destructive">Blocked</Badge>;
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	const handleUserAction = (userId: number, action: string) => {
		setUsers((prevUsers: IDemoUser[]) =>
			prevUsers.map((user) => {
				if (user.id === userId) {
					switch (action) {
						case "block":
							return { ...user, status: "BLOCKED" };
						case "unblock":
							return { ...user, status: "ACTIVE" };
						case "activate":
							return { ...user, status: "ACTIVE" };
						default:
							return user;
					}
				}
				return user;
			})
		);
	};

	// Filter users
	const filteredUsers = users.filter((user: IDemoUser) => {
		const matchesStatus = filterStatus === "all" || user.status === filterStatus;
		const matchesSearch =
			searchTerm === "" ||
			user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.phone.includes(searchTerm);

		return matchesStatus && matchesSearch;
	});

	// Pagination
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

	return (
		<DashboardLayout>
			<div className="space-y-6">
				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium">Total Users</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{users.length}</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium">Active Users</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-green-600">{users.filter((u: IDemoUser) => u.status === "ACTIVE").length}</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium">Blocked Users</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-red-600">{users.filter((u: IDemoUser) => u.status === "BLOCKED").length}</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="pb-2">
							<CardTitle className="text-sm font-medium">Total Balance</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">${users.reduce((sum: number, u: IDemoUser) => sum + u.balance, 0).toFixed(2)}</div>
						</CardContent>
					</Card>
				</div>

				{/* Filters */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Filter className="h-5 w-5" />
							Filters & Search
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<div className="relative">
								<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
							</div>
							<div>
								<Select value={filterStatus} onValueChange={setFilterStatus}>
									<SelectTrigger>
										<SelectValue placeholder="Filter by status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Status</SelectItem>
										<SelectItem value="active">Active</SelectItem>
										<SelectItem value="inactive">Inactive</SelectItem>
										<SelectItem value="blocked">Blocked</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Button variant="outline" className="w-full bg-transparent">
									<Download className="h-4 w-4 mr-2" />
									Export Users
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Users Table */}
				<Card>
					<CardHeader>
						<CardTitle>Users</CardTitle>
						<CardDescription>
							Showing {paginatedUsers.length} of {filteredUsers.length} users
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{paginatedUsers.map((user: IDemoUser) => (
								<div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
									<div className="flex items-center gap-4">
										<Avatar>
											<AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} />
											<AvatarFallback>
												{user.name
													.split(" ")
													.map((n: string) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">{user.name}</p>
											<p className="text-sm text-muted-foreground">{user.email}</p>
											<p className="text-xs text-muted-foreground">
												{user.phone} • Joined {user.joinDate}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<div className="text-right">
											<p className="font-medium">${user.balance.toFixed(2)}</p>
											<p className="text-sm text-muted-foreground">{user.transactions} transactions</p>
											<p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
										</div>
										<div className="flex items-center gap-2">
											{getStatusBadge(user.status)}
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" className="h-8 w-8 p-0">
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>
														<Eye className="mr-2 h-4 w-4" />
														View Details
													</DropdownMenuItem>
													{user.status === "BLOCKED" ? (
														<DropdownMenuItem onClick={() => handleUserAction(user.id, "unblock")}>
															<UserCheck className="mr-2 h-4 w-4" />
															Unblock User
														</DropdownMenuItem>
													) : (
														<DropdownMenuItem onClick={() => handleUserAction(user.id, "block")} className="text-red-600">
															<UserX className="mr-2 h-4 w-4" />
															Block User
														</DropdownMenuItem>
													)}
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="flex items-center justify-between mt-6">
								<p className="text-sm text-muted-foreground">
									Page {currentPage} of {totalPages}
								</p>
								<div className="flex gap-2">
									<Button variant="outline" size="sm" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1}>
										Previous
									</Button>
									<Button
										variant="outline"
										size="sm"
										onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
										disabled={currentPage === totalPages}
									>
										Next
									</Button>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</DashboardLayout>
	);
}
