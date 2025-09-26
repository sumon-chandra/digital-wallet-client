import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { navItems } from "@/constants/nav-items";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isAuthenticated } = useAuth();

	return (
		<nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
							<Wallet className="w-5 h-5 text-secondary-foreground" />
						</div>
						<span className="text-xl font-bold text-foreground">PayWallet</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link key={item.to} to={item.to} className="text-muted hover:text-foreground transition-colors duration-200 font-medium">
								{item.label}
							</Link>
						))}
					</div>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						{isAuthenticated ? (
							<Button asChild className="bg-secondary/90 hover:bg-secondary">
								<Link to="/dashboard">Dashboard</Link>
							</Button>
						) : (
							<>
								<Button variant="ghost" asChild>
									<Link to="/login">Sign In</Link>
								</Button>
								<Button asChild className="bg-secondary/90 hover:bg-secondary">
									<Link to="/signup">Get Started</Link>
								</Button>
							</>
						)}
					</div>

					{/* Mobile Menu Button */}
					<Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-border">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<Link
										key={item.to}
										to={item.to}
										className="flex items-center space-x-3 text-muted hover:text-foreground transition-colors duration-200 py-2"
										onClick={() => setIsMenuOpen(false)}
									>
										<Icon className="w-4 h-4" />
										<span>{item.label}</span>
									</Link>
								);
							})}
							<div className="flex flex-col space-y-2 pt-4 border-t border-border">
								{isAuthenticated ? (
									<Button asChild className="bg-secondary/90 hover:bg-secondary">
										<Link to="..">Dashboard</Link>
									</Button>
								) : (
									<>
										<Button variant="ghost" asChild>
											<Link to="/login">Sign In</Link>
										</Button>
										<Button asChild className="bg-secondary/90 hover:bg-secondary">
											<Link to="/signup">Get Started</Link>
										</Button>
									</>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
