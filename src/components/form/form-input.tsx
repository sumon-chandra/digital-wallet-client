import type { ReactNode } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { cn } from "@/lib/utils";

interface FormInputProps {
	children: ReactNode;
	label: string;
	className?: string;
}

const FormInput = ({ children, label, className }: FormInputProps) => {
	return (
		<FormItem className={cn(className)}>
			<FormLabel>{label}</FormLabel>
			<FormControl>{children}</FormControl>
			<FormMessage />
		</FormItem>
	);
};

export default FormInput;
