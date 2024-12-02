import React from "react";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface QuestionItemProps {
	control: Control<any>;
	register: UseFormRegister<any>;
	questionIndex: number;
	errors: any;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
	control,
	register,
	questionIndex,
	errors,
}) => {
	const { fields: answerFields, append: appendAnswer } = useFieldArray({
		control,
		name: `questions.${questionIndex}.answers`,
	});

	return (
		<div className="w-full border-[1px] border-white flex flex-col p-6 gap-6 rounded-lg">
			<Input
				type="text"
				placeholder="Enter the question..."
				className="bg-transparent w-full py-3 px-4 border border-white rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
				{...register(`questions.${questionIndex}.question` as const)}
			/>
			{errors.questions?.[questionIndex]?.question && (
				<p>{errors.questions[questionIndex].question?.message}</p>
			)}

			{answerFields.map((answer, answerIndex) => (
				<div key={answer.id} className="flex gap-2 items-center">
					<Input
						type="text"
						placeholder="Answer"
						className="bg-transparent w-1/2 py-3 px-4 border border-white rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
						{...register(
							`questions.${questionIndex}.answers.${answerIndex}.answer` as const
						)}
					/>
					<Input
						type="checkbox"
						{...register(
							`questions.${questionIndex}.answers.${answerIndex}.correct` as const
						)}
					/>
					<span className="text-white">Correct</span>
				</div>
			))}

			<Button
				type="button"
				className="w-full py-2 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
				onClick={() => appendAnswer({ answer: "", correct: false })}
				aria-label="Add Answer"
			>
				Add Answer
			</Button>
		</div>
	);
};

export default QuestionItem;
