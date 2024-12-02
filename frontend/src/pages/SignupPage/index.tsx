import Title from "../../components/Title";
import fundo from "../../assets/fundo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logopoll.png";
import icon from "../../assets/iconlogo.png";

const SignupPage: React.FC = () => {
	return (
		<div
			className="h-screen flex items-center justify-center bg-no-repeat bg-cover"
			style={{ backgroundImage: `url(${fundo})` }}
		>
			<div className="bg-white flex w-[60%] h-[68%] shadow-lg shadow-[#7a7a7a] rounded-lg">
				<div className="w-[60%] bg-gray-100 rounded-r-lg flex flex-col pl-16">
					<img src={logo} alt="A logo of PollMaker" width={150} />
					<div className="flex flex-col gap-4 w-3/4">
						<Title level={2} className="text-2xl font-bold">
							Signup to access the platform
						</Title>
						<form className="flex flex-col gap-2">
							<label htmlFor="emailSignup" className="text-sm font-semibold">
								Email
							</label>
							<Input
								type="email"
								placeholder="Enter your email..."
								id="emailSignup"
								required
								className="px-3 py-4 bg-white border rounded text-sm text-gray-700 focus:outline-none focus:ring-0  focus:border-[#187cda] "
								autoComplete="off"
								minLength={7}
							/>
							<label htmlFor="passwordSignup" className="text-sm font-semibold mt-2">
								Password
							</label>
							<Input
								type="password"
								placeholder="Enter your password..."
								id="passwordSignup"
								className="px-3 py-4 bg-white border rounded text-sm text-gray-700 focus:outline-none focus:ring-0  focus:border-[#187cda]"
								minLength={8}
								required
							/>
							<label htmlFor="passwordConfirm" className="text-sm font-semibold mt-2">
								Confirm your password
							</label>
							<Input
								type="password"
								placeholder="Confirm your password..."
								id="passwordConfirm"
								className="px-3 py-4 bg-white border rounded text-sm text-gray-700 focus:outline-none focus:ring-0  focus:border-[#187cda]"
								minLength={8}
								required
							/>
							<Button
								type="submit"
								className="px-6 py-4 bg-[#187cda] w-full rounded hover:bg-[#0470d6] ease-in-out duration-200 transition text-white mt-6"
							>
								Sign Up
							</Button>
						</form>
						<p className="text-base text-gray-700">
							If you're already have an account follow to{" "}
							<Link to={"/login"} className="text-[#187cda] font-bold">
								log in
							</Link>
						</p>
					</div>
				</div>
				<div className="w-[50%] flex flex-col items-center justify-center">
					<img src={icon} alt="A logo of PollMaker" />
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
