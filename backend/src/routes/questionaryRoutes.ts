import express, { Request, Response } from "express";
import QuestionaryController from "../controllers/questionary";

const routes = express.Router();
const questionaryController = new QuestionaryController();

routes.get("/questionary", (req, res) =>
	questionaryController.getAll(req, res)
);

routes.get("/questionary/id/:id", (req, res) =>
	questionaryController.getById(req, res)
);

routes.post("/questionary/new", (req, res) =>
	questionaryController.create(req, res)
);

routes.put(
	"/questionary/update/id/:id",
	async (req: Request, res: Response) => {
		await questionaryController.update(req, res);
	}
);

routes.delete("/questionary/delete/id/:id", (req, res) =>
	questionaryController.delete(req, res)
);

export default routes;
