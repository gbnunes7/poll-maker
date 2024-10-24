import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const FixedLayout: React.FC = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default FixedLayout;
