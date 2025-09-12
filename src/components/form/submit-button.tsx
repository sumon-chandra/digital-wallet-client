import { Button } from "../ui/button";

interface ButtonProps {
	label: string;
	disabled?: boolean;
}

const SubmitButton = ({ label, disabled }: ButtonProps) => {
	return (
		<Button type="submit" disabled={disabled} className="bg-secondary/90 hover:bg-secondary/100 w-full cursor-pointer">
			{label}
		</Button>
	);
};

export default SubmitButton;
