//@ts-ignore
import db from "../../prisma/db";

class Services {
	model;
	//@ts-ignore
	constructor(model) {
		this.model = model;
	}

	async getAll() {
		//@ts-ignore
		return await db[this.model].findMany();
	}

	async getById(id: number) {
		//@ts-ignore
		return await db[this.model].findUnique({ where: { id: id } });
	}

	//@ts-ignore
	async create(data) {
		//@ts-ignore
		return await db[this.model].create({ data: data });
	}

	async delete(id: number) {
		//@ts-ignore
		return await db[this.model].delete({ where: { id: id } });
	}

	//@ts-ignore
	async update(id: number, data) {
		//@ts-ignore
		return await db[this.model].update({ where: { id: id }, data: data });
	}
}

export default Services;
