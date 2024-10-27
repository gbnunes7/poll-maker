import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import MainContainer from "../../components/MainContainer";
import SectionContainer from "../../components/SectionContainer";
import Title from "../../components/Title";
import Button from "../../components/Button";

const NewPollPage = () => {
	const { register } = useForm();

	return (
		<MainContainer>
			<SectionContainer className="w-1/2 flex flex-col gap-4 items-center justify-center my-auto text-white">
				<form className="flex flex-col gap-6 w-full max-w-md bg-blue-600 p-8 rounded-lg shadow-lg my-8 mx-auto">
					<Title level={3} className="text-4xl text-white text-center">
						New Questionnaire
					</Title>

					<div className="w-full">
						<Input
							type="text"
							id="title"
							className="bg-transparent w-full py-3 px-4 border border-white rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
							{...register("title")}
							placeholder="Enter the questionnaire title..."
						/>
					</div>

					<Button
						type="button"
						className="w-full py-3 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
					>
						Add Question
					</Button>

					<Button
						type="submit"
						className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
					>
						Save Questionnaire
					</Button>
				</form>
			</SectionContainer>
		</MainContainer>
	);
};

export default NewPollPage;
