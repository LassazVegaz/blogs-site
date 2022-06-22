import { Blog } from "../models/blogs.model";

const createBlog = async (blog) => {
	const _blog = new Blog({
		author: blog.author,
		title: blog.title,
		content: blog.content,
	});

	await _blog.save();

	return _blog;
};

export const blogsService = {
	createBlog,
};
