import QuestionController from "controllers/questionController";
import routes from "./questionaryRoutes";
import { Request, Response } from "express";

const questionController = new QuestionController();

routes.get(
	"/question",
	async (req: Request, res: Response) =>
		await questionController.getAll(req, res)
);

routes.get(
	"/question/id/:id",
	async (req: Request, res: Response) =>
		await questionController.getById(req, res)
);

routes.put("/question/update/id/:id", async (req: Request, res: Response) => {
	await questionController.update(req, res);
});

routes.delete(
	"/question/delete/id/:id",
	async (req: Request, res: Response) => {
		await questionController.delete(req, res);
	}
);

routes.post("/question/new", async (req: Request, res: Response) => {
	await questionController.create(req, res);
});

export default routes