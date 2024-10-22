import { Response, Request } from "express";
import express from "express";
import questionaryRoutes from "./questionaryRoutes";
import questionRoutes from "./questionRoutes";
import answerRoutes from "./answerRoutes";

const setupAppRoutes = (app: any) => {
	app.use(express.json());
	app.get("/", (req: Request, res: Response) => {
		res.status(200).json("Pollmaker API");
	});
	app.use(questionaryRoutes, questionRoutes, answerRoutes);
};

export default setupAppRoutes;
