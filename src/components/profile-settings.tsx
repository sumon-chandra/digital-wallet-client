import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Lock, Bell, Shield, Camera, CheckCircle } from "lucide-react";
import type { Role } from "@/interfaces/users";

interface ProfileSettingsProps {
	userRole: Role;
	initialData?: {
		name: string;
		email: string;
		phone: string;
		avatar?: string;
		bio?: string;
		location?: string;
		agentCode?: string;
	};
}

export function ProfileSettings({ userRole, initialData }: ProfileSettingsProps) {
	const [profileData, setProfileData] = useState({
		name: initialData?.name || "John Doe",
		email: initialData?.email || "john@example.com",
		phone: initialData?.phone || "+1234567890",
		avatar: initialData?.avatar || "",
		bio: initialData?.bio || "",
		location: initialData?.location || "",
		agentCode: initialData?.agentCode || "",
	});

	const [passwordData, setPasswordData] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [notificationSettings, setNotificationSettings] = useState({
		emailNotifications: true,
		smsNotifications: false,
		transactionAlerts: true,
		securityAlerts: true,
		marketingEmails: false,
	});

	const [securitySettings, setSecuritySettings] = useState({
		twoFactorEnabled: false,
		loginAlerts: true,
		sessionTimeout: 30,
	});

	const handleProfileUpdate = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle profile update logic here
		//  console.log("Updating profile:", profileData)
		alert("Profile updated successfully!");
	};

	const handlePasswordChange = (e: React.FormEvent) => {
		e.preventDefault();
		if (passwordData.newPassword !== passwordData.confirmPassword) {
			alert("New passwords don't match!");
			return;
		}
		// Handle password change logic here
		//  console.log("Changing password")
		alert("Password changed successfully!");
		setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
	};

	const handleNotificationUpdate = () => {
		// Handle notification settings update
		//  console.log("Updating notifications:", notificationSettings)
		alert("Notification settings updated!");
	};

	const handleSecurityUpdate = () => {
		// Handle security settings update
		//  console.log("Updating security:", securitySettings)
		alert("Security settings updated!");
	};

	return (
		<div className="space-y-6">
			{/* Profile Information */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<User className="h-5 w-5" />
						Profile Information
					</CardTitle>
					<CardDescription>Update your personal information and profile details</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleProfileUpdate} className="space-y-6">
						{/* Avatar Section */}
						<div className="flex items-center gap-4">
							<Avatar className="h-20 w-20">
								<AvatarImage src={profileData.avatar || "/placeholder.svg?height=80&width=80"} />
								<AvatarFallback className="text-lg">
									{profileData.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div>
								<Button type="button" variant="outline" size="sm">
									<Camera className="h-4 w-4 mr-2" />
									Change Photo
								</Button>
								<p className="text-sm text-muted-foreground mt-1">JPG, PNG or GIF. Max size 2MB.</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="name">Full Name</Label>
								<Input id="name" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} required />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email Address</Label>
								<Input
									id="email"
									type="email"
									value={profileData.email}
									onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">Phone Number</Label>
								<Input id="phone" value={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })} required />
							</div>
							{(userRole === "AGENT" || userRole === "ADMIN") && (
								<div className="space-y-2">
									<Label htmlFor="location">Location</Label>
									<Input
										id="location"
										value={profileData.location}
										onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
										placeholder="City, Country"
									/>
								</div>
							)}
						</div>

						{userRole === "AGENT" && (
							<div className="space-y-2">
								<Label htmlFor="agentCode">Agent Code</Label>
								<div className="flex items-center gap-2">
									<Input id="agentCode" value={profileData.agentCode} disabled />
									<Badge variant="secondary">
										<CheckCircle className="h-3 w-3 mr-1" />
										Verified
									</Badge>
								</div>
								<p className="text-sm text-muted-foreground">Your unique agent identification code</p>
							</div>
						)}

						<div className="space-y-2">
							<Label htmlFor="bio">Bio</Label>
							<Textarea
								id="bio"
								value={profileData.bio}
								onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
								placeholder="Tell us about yourself..."
								rows={3}
							/>
						</div>

						<Button type="submit">Update Profile</Button>
					</form>
				</CardContent>
			</Card>

			{/* Password Change */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Lock className="h-5 w-5" />
						Change Password
					</CardTitle>
					<CardDescription>Update your password to keep your account secure</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handlePasswordChange} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="currentPassword">Current Password</Label>
							<Input
								id="currentPassword"
								type="password"
								value={passwordData.currentPassword}
								onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="newPassword">New Password</Label>
							<Input
								id="newPassword"
								type="password"
								value={passwordData.newPassword}
								onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirmPassword">Confirm New Password</Label>
							<Input
								id="confirmPassword"
								type="password"
								value={passwordData.confirmPassword}
								onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
								required
							/>
						</div>
						<Alert>
							<Shield className="h-4 w-4" />
							<AlertDescription>
								Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
							</AlertDescription>
						</Alert>
						<Button type="submit">Change Password</Button>
					</form>
				</CardContent>
			</Card>

			{/* Notification Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Bell className="h-5 w-5" />
						Notification Settings
					</CardTitle>
					<CardDescription>Manage how you receive notifications and alerts</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Email Notifications</Label>
							<p className="text-sm text-muted-foreground">Receive notifications via email</p>
						</div>
						<Switch
							checked={notificationSettings.emailNotifications}
							onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, emailNotifications: checked })}
						/>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>SMS Notifications</Label>
							<p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
						</div>
						<Switch
							checked={notificationSettings.smsNotifications}
							onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, smsNotifications: checked })}
						/>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Transaction Alerts</Label>
							<p className="text-sm text-muted-foreground">Get notified about transaction activities</p>
						</div>
						<Switch
							checked={notificationSettings.transactionAlerts}
							onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, transactionAlerts: checked })}
						/>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Security Alerts</Label>
							<p className="text-sm text-muted-foreground">Get notified about security events</p>
						</div>
						<Switch
							checked={notificationSettings.securityAlerts}
							onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, securityAlerts: checked })}
						/>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Marketing Emails</Label>
							<p className="text-sm text-muted-foreground">Receive promotional emails and updates</p>
						</div>
						<Switch
							checked={notificationSettings.marketingEmails}
							onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, marketingEmails: checked })}
						/>
					</div>
					<Button onClick={handleNotificationUpdate}>Save Notification Settings</Button>
				</CardContent>
			</Card>

			{/* Security Settings */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Shield className="h-5 w-5" />
						Security Settings
					</CardTitle>
					<CardDescription>Manage your account security and privacy settings</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Two-Factor Authentication</Label>
							<p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
						</div>
						<Switch
							checked={securitySettings.twoFactorEnabled}
							onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorEnabled: checked })}
						/>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Login Alerts</Label>
							<p className="text-sm text-muted-foreground">Get notified when someone logs into your account</p>
						</div>
						<Switch
							checked={securitySettings.loginAlerts}
							onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginAlerts: checked })}
						/>
					</div>
					<Separator />
					<div className="space-y-2">
						<Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
						<Input
							id="sessionTimeout"
							type="number"
							value={securitySettings.sessionTimeout}
							onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: Number.parseInt(e.target.value) })}
							min="5"
							max="480"
							className="w-32"
						/>
						<p className="text-sm text-muted-foreground">Automatically log out after this period of inactivity</p>
					</div>
					<Button onClick={handleSecurityUpdate}>Save Security Settings</Button>
				</CardContent>
			</Card>

			{/* Account Actions */}
			<Card>
				<CardHeader>
					<CardTitle className="text-red-600">Danger Zone</CardTitle>
					<CardDescription>Irreversible and destructive actions</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
						<div>
							<h4 className="font-medium text-red-600">Deactivate Account</h4>
							<p className="text-sm text-muted-foreground">Temporarily disable your account</p>
						</div>
						<Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
							Deactivate
						</Button>
					</div>
					<div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
						<div>
							<h4 className="font-medium text-red-600">Delete Account</h4>
							<p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
						</div>
						<Button variant="destructive">Delete Account</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
