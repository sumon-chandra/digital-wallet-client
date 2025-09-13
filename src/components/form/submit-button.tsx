import { Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonProps {
	label: string;
	disabled?: boolean;
	loading?: boolean;
}

const SubmitButton = ({ label, disabled, loading }: ButtonProps) => {
	return (
		<Button type="submit" disabled={disabled} className="bg-secondary/90 hover:bg-secondary/100 w-full cursor-pointer">
			{loading ? (
				<>
					<Loader2Icon className="animate-spin" />
					Please wait
				</>
			) : (
				label
			)}
		</Button>
	);
};

export default SubmitButton;
