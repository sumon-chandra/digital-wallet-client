import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../ui/password-input";
import FormInput from "./form-input";
import SubmitButton from "./submit-button";
import { useLoginMutation } from "@/redux/api/auth";
import type { CustomBaseQueryError } from "@/redux/base-api";
import { useNavigate } from "@tanstack/react-router";

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export default function LoginForm() {
	const [login, { isLoading, error, isError, data, isSuccess }] = useLoginMutation();
	const navigate = useNavigate();
	const errorRes = error as CustomBaseQueryError;

	if (isError) {
		console.error({
			isErr: isError,
			data: errorRes.data,
		});
		toast.error(errorRes.data?.message);
	}
	if (isSuccess) {
		toast.success(data?.message);
	}

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	});

	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		try {
			const response = await login(values);
			if (response.data?.success) {
				navigate({ to: "/" });
			}
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
				<SubmitButton label="Login" loading={isLoading} />
			</form>
		</Form>
	);
}
