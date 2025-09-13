import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../ui/password-input";
import FormInput from "./form-input";
import SubmitButton from "./submit-button";
import { Switch } from "../ui/switch";
import { useSignupMutation } from "@/redux/api/users";
import { type IUser } from "@/interfaces/users";
import type { CustomBaseQueryError } from "@/redux/base-api";

const signupFormSchema = z.object({
	name: z.string().min(1),
	email: z.string(),
	address: z.string().optional(),
	password: z.string(),
	agent: z.boolean().optional(),
});

export default function SignupForm() {
	const [signup, { isLoading, error, isSuccess, data }] = useSignupMutation();
	const errorRes = error as CustomBaseQueryError;

	if (errorRes?.data?.errorSources) {
		errorRes.data.errorSources.forEach((error) => toast.error(error.message));
	}
	if (isSuccess) {
		toast.success(data?.message);
	}

	const form = useForm<z.infer<typeof signupFormSchema>>({
		resolver: zodResolver(signupFormSchema),
	});

	function onSubmit(values: z.infer<typeof signupFormSchema>) {
		try {
			const { agent, ...restValues } = values;
			const userPayload: Partial<IUser> = {
				...restValues,
				role: agent ? "AGENT" : "USER",
			};
			signup(userPayload);
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
					name="agent"
					render={({ field }) => (
						<FormInput label="Agent?" className="flex flex-row items-center justify-between rounded-lg border p-4">
							<Switch checked={field.value} onCheckedChange={field.onChange} aria-readonly defaultChecked={false} className="bg-secondary" />
						</FormInput>
					)}
				/>

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormInput label="Name">
							<Input placeholder="John Doe" type="text" {...field} className="ring ring-secondary" />
						</FormInput>
					)}
				/>

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
					name="address"
					render={({ field }) => (
						<FormInput label="Address">
							<Input placeholder="New York" type="" {...field} className="ring ring-secondary" />
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
				<SubmitButton label="Signup" loading={isLoading} />
			</form>
		</Form>
	);
}
