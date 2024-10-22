import { PrismaClient } from "@prisma/client";
import db from "./db.ts";
async function main() {
	const admin = {
		id: 1,
		name: "admin",
		email: "admin",
	};

	const user = await db.user.upsert({
		where: { id: admin.id },
		update: {},
		create: admin,
	});

	console.log(user);

	const questionaries = [
		{
			title: "General Knowledge",
		},
		{
			title: "Math Quiz",
		},
	];

	const questions = [
		{
			question: "What is the capital of France?",
			correctAnswer: "Paris",
			questionary: { connect: { id: 1 } }
		},
		{
			question: "What is the capital of Germany?",
			correctAnswer: "Berlin",
			questionary: { connect: { id: 1 } },
		},
		{
			question: "What is 2+2?",
			correctAnswer: "4",
			questionary: { connect: { id: 2 } },
		},
		{
			question: "What is 2*3?",
			correctAnswer: "6",
			questionary: { connect: { id: 2 } },
		},
	];

	const answer = [
		{ answer: "Berlin", isCorrect: false, questionId: 1 },
		{ answer: "Paris", isCorrect: true, questionId: 1 },
		{ answer: "Madrid", isCorrect: false, questionId: 1 },

		{ answer: "Paris", isCorrect: false, questionId: 2 },
		{ answer: "Berlin", isCorrect: true, questionId: 2 },
		{ answer: "Rio de Janeiro", isCorrect: false, questionId: 2 },

		{ answer: "2", isCorrect: false, questionId: 3 },
		{ answer: "4", isCorrect: true, questionId: 3 },
		{ answer: "10", isCorrect: false, questionId: 3 },

		{ answer: "6", isCorrect: false, questionId: 4 },
		{ answer: "5", isCorrect: true, questionId: 4 },
		{ answer: "10", isCorrect: false, questionId: 4 },
	];

	for (const questionary of questionaries) {
		await db.questionary.create({
			data: questionary,
		});
	}

	for (const question of questions) {
		await db.question.create({
			data: question,
		});
	}

	for (const ans of answer) {
		await db.answer.create({
			data: ans,
		});
	}

	console.log("Done");
}
main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});
