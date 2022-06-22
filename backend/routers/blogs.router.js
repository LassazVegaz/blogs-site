import KoaRouter from "koa-router";

const _router = new KoaRouter({
	prefix: "/blogs",
});

_router.get("/", (ctx) => {
	ctx.body = {
		name: "scene",
	};
});

_router.post("/", (ctx) => {
	ctx.body = ctx.request.body;
});

export const blogsRouter = _router;
