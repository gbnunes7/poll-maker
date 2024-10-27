interface InputProps {
	children?: React.ReactNode;
	type?: string;
	placeholder?: string;
	id?: string;
	name?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	maxLength?: number;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	autoComplete?: string;
	pattern?: string;
    minLength?: number;
	ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
	return <input ref={rest.ref} {...rest} />;
};

export default Input;
