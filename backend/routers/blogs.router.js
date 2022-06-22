import KoaRouter from "koa-router";
import { blogsService } from "../services/blogs.service";

const _router = new KoaRouter({
	prefix: "/blogs",
});

_router.get("/", async (ctx) => {
	try {
		ctx.body = await blogsService.getBlogs();
	} catch (error) {
		ctx.body = error.message;
		ctx.status = 500;
	}
});

_router.get("/:id", async (ctx) => {
	try {
		ctx.body = await blogsService.getBlog(ctx.params.id);
	} catch (error) {
		ctx.body = error.message;
		ctx.status = 500;
	}
});

_router.post("/", async (ctx) => {
	try {
		ctx.body = await blogsService.createBlog(ctx.request.body);
	} catch (error) {
		ctx.body = error.message;
		ctx.status = 500;
	}
});

_router.put("/:id", async (ctx) => {
	try {
		ctx.body = await blogsService.updateBlog(
			ctx.params.id,
			ctx.request.body
		);
	} catch (error) {
		ctx.body = error.message;
		ctx.status = 500;
	}
});

_router.delete("/:id", async (ctx) => {
	try {
		await blogsService.deleteBlog(ctx.params.id);
		ctx.body = null;
	} catch (error) {
		ctx.body = error.message;
		ctx.status = 500;
	}
});

export const blogsRouter = _router;
