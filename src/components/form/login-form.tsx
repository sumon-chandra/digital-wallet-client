import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../ui/password-input";
import FormInput from "./form-input";
import SubmitButton from "./submit-button";

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export default function LoginForm() {
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	});

	function onSubmit(values: z.infer<typeof loginFormSchema>) {
		try {
			// eslint-disable-next-line no-console
			console.log(values);
			toast(
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error("Failed to submit the form. Please try again.");
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormInput label="Email">
							<Input placeholder="John Doe" type="email" {...field} className="ring ring-secondary" />
						</FormInput>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormInput label="Password">
							<PasswordInput {...field} className="ring ring-secondary" />
						</FormInput>
					)}
				/>
				<SubmitButton label="Login" />
			</form>
		</Form>
	);
}
