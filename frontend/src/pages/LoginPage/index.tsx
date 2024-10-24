import icon from "../../assets/iconlogo.png";
import logo from "../../assets/logopoll.png";
import fundo from "../../assets/fundo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

const LoginPage: React.FC = () => {
	return (
		<div
			className="h-screen flex items-center justify-center bg-no-repeat bg-cover"
			style={{ backgroundImage: `url(${fundo})` }}
		>
			<div className="bg-white flex w-[60%] h-[68%] shadow-lg shadow-[#7a7a7a] rounded-lg">
				<div className="w-[50%] flex flex-col items-center justify-center">
					<img src={icon} alt="A logo of PollMaker" />
				</div>
				<div className="w-[60%] bg-gray-100 rounded-r-lg flex flex-col pl-16">
					<img src={logo} alt="A logo of PollMaker" width={150} />
					<div className="flex flex-col gap-4 w-3/4">
						<Title level={2} className="text-3xl font-bold">
							Access the platform
						</Title>
						<p className="text-sm text-gray-700">
							Log in to your account or sign up to build and view your polls.
						</p>
						<form className="flex flex-col gap-2">
							<label htmlFor="email" className="text-sm font-semibold">
								Email
							</label>
							<Input
								type="email"
								placeholder="Enter your email..."
								id="email"
								required
								className="px-3 py-4 bg-white border rounded text-sm text-gray-700 focus:outline-none focus:ring-0  focus:border-[#187cda] "
								autoComplete="off"
								minLength={7}
							/>
							<label htmlFor="password" className="text-sm font-semibold mt-2">
								Password
							</label>
							<Input
								type="password"
								placeholder="Enter your password..."
								id="password"
								className="px-3 py-4 bg-white border rounded text-sm text-gray-700 focus:outline-none focus:ring-0  focus:border-[#187cda]"
								minLength={8}
								required
							/>
							<Button
								type="submit"
								className="px-6 py-4 bg-[#187cda] w-full rounded hover:bg-[#0470d6] ease-in-out duration-200 transition text-white mt-6"
							>
								Log in
							</Button>
						</form>
						<p className="text-base text-gray-700">
							Don't you have an account?{" "}
							<Link to={"/signup"} className="text-[#187cda] font-bold">
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
