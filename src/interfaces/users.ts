export type Role = "ADMIN" | "USER" | "AGENT";
export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";
export type AgentStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	role: Role;
	agent?: { isApproved: boolean; status: AgentStatus };
	password?: string;
	isEmailVerified?: boolean;
	isActive?: IsActive;
	address?: string;
	createdAt?: Date;
}

export interface IDemoUser {
	id: number;
	name: string;
	email: string;
	phone: string;
	balance: number;
	status: IsActive; // you can restrict or leave as string
	joinDate: string; // ISO date format
	lastActive: string; // timestamp format
	transactions: number;
}
