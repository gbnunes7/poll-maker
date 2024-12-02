interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
	children,
	...rest
}) => {
	return <section {...rest}>{children}</section>;
};

export default SectionContainer;
