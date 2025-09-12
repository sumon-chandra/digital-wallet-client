import SignupForm from "@/components/form/signup-form";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Wallet } from "lucide-react";

export default function SignupPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="mt-14">
				<div className="text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
						<Wallet className="w-8 h-8 text-white" />
					</div>
					<h1 className="text-3xl font-bold mb-2 drop-shadow-lg">Get Started</h1>
					<p className="drop-shadow">Create your PayWallet account in minutes</p>
				</div>
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex items-center justify-center">
						<div className="w-full max-w-md">
							<div className="p-6 md:p-8">
								<div className="flex flex-col gap-6">
									<SignupForm />
									<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
										<span className="bg-card text-muted relative z-10 px-2">Or continue with</span>
									</div>
									<Button variant="outline" type="button" className="w-full">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
												fill="currentColor"
											/>
										</svg>
										<span className="sr-only">Login with Google</span>
									</Button>
									<div className="text-center">
										<p className="text-sm text-gray-600">
											Already have an account?{" "}
											<Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
												Sign in here
											</Link>
										</p>
									</div>
								</div>
							</div>
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
