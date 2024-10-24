interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};

export default Button;
