import MainContainer from "../../components/MainContainer";
import SectionContainer from "../../components/SectionContainer";
import Title from "../../components/Title";
import img from "../../assets/homeImage.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import fundo from "../../assets/fundoHome.png";
const Home: React.FC = () => {
	return (
		<MainContainer>
			<SectionContainer className="bg-white w-full h-full md:px-36 px-6 py-8 md:py-10 md:py-4 flex flex-col-reverse md:flex-row items-center md:justify-between">
				<div className="flex flex-col gap-6 md:w-1/3 md:mb-14">
					<Title level={3} className="text-4xl text-black">
						Build your custom poll
					</Title>
					<p className="text-sm text-gray-700">
						With PollMaker, crafting your own personalized polls has never been
						easier! Share your creations effortlessly with friends and watch the
						results roll in. Ready to start? Log in now and unleash your
						creativity!
					</p>
					<Link className="w-full md:w-1/2" to="/login">
						<Button
							ariaLabel="Login Button"
							type="button"
							className="bg-[#5eddf4] text-black w-full px-4 py-2 rounded-lg hover:bg-[#30d1fd] transition duration-[0.15s] ease-in-out md:mt-12"
						>
							Login
						</Button>
					</Link>
				</div>
				<div>
					<img src={img} alt="" className="w-[650px]" />
				</div>
			</SectionContainer>
			<SectionContainer
				style={{
					backgroundImage: `url(${fundo})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className=" bg-gray-100 w-full md:px-32 px-6 py-24 flex flex-col items-center gap-12"
			>
				<Title level={4} className="text-4xl">
					Impress your friends with incredible polls
				</Title>
				<Link className="w-full md:w-1/6" to="/signup">
					<Button className="bg-[#5eddf4] text-black w-full px-4 py-2 rounded-lg hover:bg-[#30d1fd] transition duration-[0.15s] ease-in-out">
						Sign Up
					</Button>
				</Link>
			</SectionContainer>
		</MainContainer>
	);
};

export default Home;
