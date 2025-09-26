import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/footer";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
			<Navigation />

			<main className="container mx-auto px-4 py-20">
				<div className="max-w-4xl mx-auto text-center">
					{/* Hero Section */}
					<div className="mb-12">
						<Badge variant="outline" className="mb-6 text-sm font-medium">
							Error 404
						</Badge>

						<h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>

						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Page Not Found</h2>

						<p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
							Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
						</p>
					</div>

					{/* Action Cards */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
							<CardContent className="p-6 text-center">
								<Home className="h-8 w-8 text-primary mx-auto mb-4" />
								<h3 className="font-semibold mb-2">Go Home</h3>
								<p className="text-sm text-muted-foreground mb-4">Return to our homepage</p>
								<Button asChild variant="outline" size="sm" className="w-full bg-transparent">
									<Link to="/">
										<Home className="h-4 w-4 mr-2" />
										Home
									</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
							<CardContent className="p-6 text-center">
								<ArrowLeft className="h-8 w-8 text-primary mx-auto mb-4" />
								<h3 className="font-semibold mb-2">Go Back</h3>
								<p className="text-sm text-muted-foreground mb-4">Return to previous page</p>
								<Button variant="outline" size="sm" className="w-full bg-transparent" onClick={() => window.history.back()}>
									<ArrowLeft className="h-4 w-4 mr-2" />
									Go Back
								</Button>
							</CardContent>
						</Card>

						<Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
							<CardContent className="p-6 text-center">
								<Search className="h-8 w-8 text-primary mx-auto mb-4" />
								<h3 className="font-semibold mb-2">Dashboard</h3>
								<p className="text-sm text-muted-foreground mb-4">Access your wallet</p>
								<Button asChild variant="outline" size="sm" className="w-full bg-transparent">
									<Link to="/dashboard">
										<Search className="h-4 w-4 mr-2" />
										Dashboard
									</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
							<CardContent className="p-6 text-center">
								<HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
								<h3 className="font-semibold mb-2">Get Help</h3>
								<p className="text-sm text-muted-foreground mb-4">Contact our support</p>
								<Button asChild variant="outline" size="sm" className="w-full bg-transparent">
									<Link to="/contact">
										<HelpCircle className="h-4 w-4 mr-2" />
										Contact
									</Link>
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Popular Pages */}
					<Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
						<CardContent className="p-8">
							<h3 className="text-xl font-semibold mb-6">Popular Pages</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<Button asChild variant="ghost" className="justify-start">
									<Link to="/about">About Us</Link>
								</Button>
								<Button asChild variant="ghost" className="justify-start">
									<Link to="/pricing">Pricing</Link>
								</Button>
								<Button asChild variant="ghost" className="justify-start">
									<Link to="/faq">FAQ</Link>
								</Button>
								<Button asChild variant="ghost" className="justify-start">
									<Link to="/login">Login</Link>
								</Button>
								<Button asChild variant="ghost" className="justify-start">
									<Link to="/signup">Sign Up</Link>
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* CTA Section */}
					<div className="mt-12">
						<p className="text-muted-foreground mb-6">Still can't find what you're looking for?</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg">
								<Link to="/">
									<Home className="h-4 w-4 mr-2" />
									Return Home
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link to="/contact">
									<HelpCircle className="h-4 w-4 mr-2" />
									Contact Support
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
