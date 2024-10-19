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
