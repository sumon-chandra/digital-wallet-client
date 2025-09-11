import { SignupForm } from "@/components/signup-form";
import { Wallet } from "lucide-react";

export default function SignupPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="mt-20">
				<div className="text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
						<Wallet className="w-8 h-8 text-white" />
					</div>
					<h1 className="text-3xl font-bold mb-2 drop-shadow-lg">Get Started</h1>
					<p className="drop-shadow">Create your PayWallet account in minutes</p>
				</div>
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex flex-1 items-center justify-center">
						<div className="w-full max-w-md">
							<SignupForm />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-muted relative hidden lg:block">
				<img
					src="/src/assets/signup-background.jpg"
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
