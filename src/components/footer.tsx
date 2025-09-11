import { Link } from "@tanstack/react-router";
import { Wallet, Twitter, Facebook, Linkedin, Github } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-foreground text-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="space-y-4">
						<Link to="/" className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
								<Wallet className="w-5 h-5 text-secondary-foreground" />
							</div>
							<span className="text-xl font-bold">PayWallet</span>
						</Link>
						<p className="text-muted text-sm leading-relaxed">
							Secure, fast, and reliable digital wallet for all your financial needs. Experience the future of digital payments.
						</p>
						<div className="flex space-x-4">
							<Link to="/" className="text-muted hover:text-background transition-colors">
								<Twitter className="w-5 h-5" />
							</Link>
							<Link to="." className="text-muted hover:text-background transition-colors">
								<Facebook className="w-5 h-5" />
							</Link>
							<Link to="." className="text-muted hover:text-background transition-colors">
								<Linkedin className="w-5 h-5" />
							</Link>
							<Link to="." className="text-muted hover:text-background transition-colors">
								<Github className="w-5 h-5" />
							</Link>
						</div>
					</div>

					{/* Product */}
					<div>
						<h3 className="font-semibold mb-4">Product</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Features
								</Link>
							</li>
							<li>
								<Link to="/pricing" className="text-muted hover:text-background transition-colors text-sm">
									Pricing
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Security
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									API
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/about" className="text-muted hover:text-background transition-colors text-sm">
									About Us
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Careers
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Blog
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Press
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="font-semibold mb-4">Support</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/contact" className="text-muted hover:text-background transition-colors text-sm">
									Contact
								</Link>
							</li>
							<li>
								<Link to="/faq" className="text-muted hover:text-background transition-colors text-sm">
									FAQ
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Help Center
								</Link>
							</li>
							<li>
								<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
									Status
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-muted/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-muted text-sm">© 2024 PayWallet. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
							Privacy Policy
						</Link>
						<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
							Terms of Service
						</Link>
						<Link to="/" className="text-muted hover:text-background transition-colors text-sm">
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
