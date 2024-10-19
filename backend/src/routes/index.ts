import { Response, Request } from "express";
import express from "express";
import questionaryRoutes from "./questionaryRoutes";

const setupAppRoutes = (app: any) => {
	app.use(express.json()); 
	app.get("/", (req: Request, res: Response) => {
		res.status(200).json("Pollmaker API");
	});
	app.use(questionaryRoutes); 
};

export default setupAppRoutes;
