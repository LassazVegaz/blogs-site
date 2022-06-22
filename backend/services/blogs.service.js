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

const getBlogs = async () => {
	return await Blog.find();
};

const getBlog = async (id) => {
	return await Blog.findById(id);
};

const updateBlog = async (id, blog) => {
	await Blog.findByIdAndUpdate(id, {
		author: blog.author,
		title: blog.title,
		content: blog.content,
	});

	return getBlog(id);
};

const deleteBlog = async (id) => {
	await Blog.findByIdAndDelete(id);
};

export const blogsService = {
	createBlog,
	getBlogs,
	getBlog,
	updateBlog,
	deleteBlog,
};
