import LoginForm from "@/components/form/login-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Wallet } from "lucide-react";

export default function LoginPage() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<div className="flex flex-col gap-6">
					<Card className="overflow-hidden p-0">
						<CardContent className="grid p-0 md:grid-cols-2">
							<div className="p-6 md:p-8">
								<div className="text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
										<Wallet className="w-8 h-8 text-white" />
									</div>
									<h1 className="text-xl font-bold mb-2 drop-shadow-lg">Welcome back!</h1>
								</div>
								<div className="flex flex-col gap-6">
									<LoginForm />
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
											Don't have an account?{" "}
											<Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
												Sign up for free
											</Link>
										</p>
									</div>
								</div>
							</div>
							<div className="bg-muted relative hidden md:block">
								<img
									src="/src/assets/login-background.jpg"
									alt="Image"
									className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
								/>
							</div>
						</CardContent>
					</Card>
					<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
						By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
					</div>
				</div>
			</div>
		</div>
	);
}
