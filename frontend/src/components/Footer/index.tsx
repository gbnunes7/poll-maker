import { Link } from "react-router-dom";
import logo from "../../assets/logopoll.png";

const Footer: React.FC = () => {
	const actualDate = new Date().getFullYear();

	return (
		<footer className="h-48 bg-[#074ba0] md:px-32 px-6 py-4 flex flex-row items-center gap-4 md:gap-96">
			<div className="border-r pr-16">
				<img src={logo} alt="" width={170} />
			</div>
			<div className="flex gap-4 flex-col text-white">
				<p> © {actualDate} Developed by Gabriel Melo</p>
				<p>
					Found me on my{" "}
					<Link
						to={"https://github.com/gbnunes7"}
						target="_blank"
						rel="noreferrer noopen"
						className="font-bold"
					>
						Github
					</Link>{" "}
					or{" "}
					<Link
						to={"https://www.linkedin.com/in/gabrielmelo7/"}
						target="_blank"
						rel="noreferrer noopen"
						className="font-bold"
					>
						Linkedin
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
