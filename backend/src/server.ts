import "dotenv/config";
import { app } from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
	console.log("oi");
	console.log("oi2");

});

