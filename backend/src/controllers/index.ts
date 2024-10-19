import { Request, Response } from "express";

class Controller {
	entityService;
	constructor(entityService: any) {
		this.entityService = entityService;
	}

	async getAll(req: Request, res: Response) {
		try {
			const data = await this.entityService.getAll();
			if (!data) {
				res.status(404).json(`${JSON.stringify(this.entityService)} Not found`);
			}
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(`Ocorreu um erro.`);
		}
	}

	async getById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const data = await this.entityService.getById(Number(id));
			if (!data) {
				res.status(404).json(`${JSON.stringify(this.entityService)} Not found`);
				return;
			}
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async create(req: Request, res: Response) {
		try {
			const body = req.body;
			const data = await this.entityService.create(body);
			if (!data) {
				res
					.status(500)
					.json(`Error creating ${JSON.stringify(this.entityService)}`);
				return;
			}
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const data = await this.entityService.delete(Number(id));
			if (!data) {
				res.status(404).json(`${JSON.stringify(this.entityService)} Not found`);
				return;
			}
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const existingUser = await this.entityService.getById(Number(id));

			if (!existingUser) {
				return res.status(404).json(`User with ID ${id} not found.`);
			}

			const body = req.body;
			const data = await this.entityService.update(Number(id), body);
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

export default Controller;
