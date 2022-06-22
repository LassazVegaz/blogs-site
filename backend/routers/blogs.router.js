import KoaRouter from "koa-router";
import { blogsService } from "../services/blogs.service";

const _router = new KoaRouter({
	prefix: "/blogs",
});

_router.get("/", (ctx) => {
	ctx.body = {
		name: "scene",
	};
});

_router.post("/", async (ctx) => {
	ctx.body = await blogsService.createBlog(ctx.request.body);
});

export const blogsRouter = _router;
