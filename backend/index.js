import Koa from "koa";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";
import { blogsRouter } from "./routers/blogs.router";
import { dbService } from "./services/db.service";

dotenv.config();

const run = async () => {
	console.log("Connecting to database...");
	await dbService.connect();

	const koaApp = new Koa();
	const port = process.env.PORT;

	koaApp.use(bodyParser());

	koaApp.use(blogsRouter.routes());

	koaApp.listen(port, () => console.log(`App is listening to port ${port}`));
};

run()
	.catch((e) => {
		console.error("App crashed", e);
	})
	.finally("App closed");
