import express, { Request, Response } from "express";
import QuestionaryController from "../controllers/questionary";

export const routes = express.Router();
const questionaryController = new QuestionaryController();

routes.get(
	"/questionary",
	async (req: Request, res: Response) =>
		await questionaryController.getAll(req, res)
);

routes.get(
	"/questionary/id/:id",
	async (req: Request, res: Response) =>
		await questionaryController.getById(req, res)
);

routes.post(
	"/questionary/new",
	async (req: Request, res: Response) =>
		await questionaryController.create(req, res)
);

routes.put(
	"/questionary/update/id/:id",
	async (req: Request, res: Response) => {
		await questionaryController.update(req, res);
	}
);

routes.delete(
	"/questionary/delete/id/:id",
	async (req: Request, res: Response) =>
		await questionaryController.delete(req, res)
);

export default routes;
