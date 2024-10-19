import "dotenv/config";
import { app } from "./app.js";
import setupAppRoutes from "./routes/index";

const PORT = process.env.PORT;

setupAppRoutes(app);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
