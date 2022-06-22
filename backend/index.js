import Koa from "koa";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";
import { blogsRouter } from "./routers/blogs.router";

dotenv.config();

const app = new Koa();
const port = process.env.PORT;

app.use(bodyParser());

app.use(blogsRouter.routes());

app.listen(port, () => console.log(`App is listening to port ${port}`));
