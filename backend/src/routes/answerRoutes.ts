import { Request, Response } from "express";
import routes from "./questionaryRoutes";
import AnswerController from "controllers/answerController";

const answerController = new AnswerController();

routes.get("/answer", async (req: Request, res: Response) => {
	await answerController.getAll(req, res);
});

routes.get("/answer/id/:id", async (req: Request, res: Response) => {
	await answerController.getById(req, res);
});

routes.post("/answer/new", async (req: Request, res: Response) => {
	await answerController.create(req, res);
});

routes.put("/answer/update/id/:id", async (req: Request, res: Response) => {
	await answerController.update(req, res);
});

routes.delete("/answer/delete/id/:id", async (req: Request, res: Response) => {
	await answerController.delete(req, res);
});
