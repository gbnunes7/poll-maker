import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input";
import MainContainer from "../../components/MainContainer";
import SectionContainer from "../../components/SectionContainer";
import Title from "../../components/Title";
import Button from "../../components/Button";
import QuestionItem from "./../../components/QuestionItem"; // Ajuste o caminho conforme necessário

// Definindo o esquema com Zod
const answerSchema = z.object({
	answer: z.string().min(1, "Answer is required"),
	correct: z.boolean(),
});

const questionSchema = z.object({
	question: z.string().min(1, "Question is required"),
	answers: z.array(answerSchema),
});

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	questions: z.array(questionSchema),
});

type FormData = z.infer<typeof formSchema>;

const NewPollPage: React.FC = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			questions: [
				{
					question: "",
					answers: [{ answer: "", correct: false }],
				},
			],
		},
	});

	// `useFieldArray` para gerenciar a lista de perguntas
	const { fields: questionFields, append: appendQuestion } = useFieldArray({
		control,
		name: "questions",
	});

	// Adiciona uma nova pergunta com uma resposta vazia
	const addQuestion = () => {
		appendQuestion({
			question: "",
			answers: [{ answer: "", correct: false }],
		});
	};

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<MainContainer>
			<SectionContainer className="w-1/2 flex flex-col gap-4 items-center justify-center my-auto text-white">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-6 w-full bg-blue-600 p-8 rounded-lg shadow-lg my-8 mx-auto"
				>
					<Title level={3} className="text-4xl text-white">
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
						{errors.title && <p>{errors.title.message}</p>}
					</div>

					{questionFields.map((question, questionIndex) => (
						<QuestionItem
							key={question.id}
							control={control}
							register={register}
							questionIndex={questionIndex}
							errors={errors}
						/>
					))}

					<Button
						type="button"
						className="w-full py-3 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
						onClick={addQuestion}
						aria-label="Add Question"
					>
						Add Question
					</Button>

					<Button
						type="submit"
						className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
						aria-label="Save Questionnaire"
					>
						Save Questionnaire
					</Button>
				</form>
			</SectionContainer>
		</MainContainer>
	);
};

export default NewPollPage;
