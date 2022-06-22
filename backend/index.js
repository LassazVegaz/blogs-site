import Koa from "koa";
import dotenv from "dotenv";

dotenv.config();

const app = new Koa();
const port = process.env.PORT;

app.use(async (ctx) => {
	ctx.body = "Hello World";
});

app.listen(port, () => console.log(`App is listening to port ${port}`));
