import { Link } from "react-router-dom";
import logo from "../../assets/logopoll.png";
import Button from "../Button";

const Header: React.FC = () => {
	return (
		<header className="px-4 md:h-24 bg-white w-full border-b-[1px] flex items-center md:px-32 justify-between">
			<img src={logo} alt="Poll Maker logo" className="md:w-36 w-24" />
			<nav>
				<ul className="md:flex hidden gap-4 font-semibold">
					<li>
						<Link to="/" aria-label="Home">
							Home
						</Link>
					</li>
					<li>
						<Link to="/newpoll" aria-label="New Poll">
							New Poll
						</Link>
					</li>
					<li>
						<Link to="/mypolls" aria-label="My Polls">
							My Polls
						</Link>
					</li>
				</ul>
			</nav>
			<div className="md:flex hidden gap-4">
				<Link to={"/login"} aria-label="Login">
					<Button
						ariaLabel="Login button"
						className="bg-[#fef6f2] text-black px-4 py-2 rounded-lg"
					>
						Login
					</Button>
				</Link>
				<Link to={"/signup"} aria-label="Sign Up">
					<Button
						ariaLabel="Sign Up button"
						className="bg-[#5eddf4] text-white px-4 py-2 rounded-lg hover:bg-[#30d1fd] transition duration-[0.15s] ease-in-out"
					>
						Sign Up
					</Button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
