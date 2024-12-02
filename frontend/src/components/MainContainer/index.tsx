interface MainContainerProps {
	children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
	return (
		<main className="flex-grow flex flex-col items-center w-full ">
			{children}
		</main>
	);
};

export default MainContainer;
