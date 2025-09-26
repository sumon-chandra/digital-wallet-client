import { Wallet, Shield, CreditCard, Users, HelpCircle, Phone } from "lucide-react";

export const navItems = [
	{ to: "/", label: "Home", icon: Wallet },
	{ to: "/about", label: "About", icon: Users },
	{ to: "/features", label: "Features", icon: Shield },
	{ to: "/pricing", label: "Pricing", icon: CreditCard },
	{ to: "/contact", label: "Contact", icon: Phone },
	{ to: "/faq", label: "FAQ", icon: HelpCircle },
];
