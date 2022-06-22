import mongoose from "mongoose";

const _dbService = () => {
	const connect = async () => {
		mongoose.connect(process.env.CONNECTION_STR);
		console.log(`connected to database at ${process.env.CONNECTION_STR}`);
	};

	return {
		connect,
	};
};

export const dbService = _dbService();
