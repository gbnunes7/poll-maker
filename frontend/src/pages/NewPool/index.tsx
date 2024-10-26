import { useState } from "react";
import Input from "../../components/Input";
import MainContainer from "../../components/MainContainer";
import SectionContainer from "../../components/SectionContainer";
import Title from "../../components/Title";
import Button from "../../components/Button";

const NewPollPage = () => {
	const [pollTitle, setPollTitle] = useState("");
	const [pollDescription, setPollDescription] = useState("");
	const [options, setOptions] = useState(["", ""]);

	const handleAddOption = () => {
		setOptions([...options, ""]);
	};

	const handleOptionChange = (index: number, value: string) => {
		const updatedOptions = [...options];
		updatedOptions[index] = value;
		setOptions(updatedOptions);
	};

	const handleFormSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// Lógica para envio do formulário
		console.log({ pollTitle, pollDescription, options });
	};

	return (
		<MainContainer>
			<SectionContainer className="w-1/2 flex flex-col gap-4 bg-red-500 items-center justify-center my-auto">
				<Title level={3}>Create a new poll</Title>
				<form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
					<Input
						value={pollTitle}
						onChange={(e) => setPollTitle(e.target.value)}
					/>
					<Input
						value={pollDescription}
						onChange={(e) => setPollDescription(e.target.value)}
					/>
					<div className="flex flex-col gap-2">
						<Title level={4}>Options</Title>
						{options.map((option, index) => (
							<Input
								key={index}
								value={option}
								onChange={(e) => handleOptionChange(index, e.target.value)}
							/>
						))}
						<Button
							onClick={handleAddOption}
							type="button"
							className="self-start"
						>
							Add Option
						</Button>
					</div>
					<Button type="submit" className="mt-4">
						Create Poll
					</Button>
				</form>
			</SectionContainer>
		</MainContainer>
	);
};

export default NewPollPage;
