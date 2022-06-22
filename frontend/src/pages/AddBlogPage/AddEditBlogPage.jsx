import { Typography, Box, TextField, Button } from "@mui/material";
import { PageContainer } from "../../components/PageContainer";

export const AddEditBlogPage = () => {
	return (
		<PageContainer>
			<Typography variant="h3" textAlign="center">
				Create a New Blog
			</Typography>

			<Box
				component="form"
				sx={{
					mt: 10,
					display: "flex",
					flexDirection: "column",
					rowGap: 5,
				}}
			>
				<TextField label="Author" fullWidth />

				<TextField label="Title" fullWidth />

				<TextField
					label="Write your blog here"
					fullWidth
					multiline
					minRows={10}
				/>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<Button
						type="submit"
						variant="contained"
						sx={{
							px: 10,
						}}
					>
						Create
					</Button>
					<Button
						type="submit"
						variant="contained"
						sx={{
							px: 10,
						}}
					>
						Update
					</Button>
					<Button
						type="submit"
						variant="outlined"
						color="secondary"
						sx={{
							px: 10,
						}}
					>
						Cancel
					</Button>
				</Box>
			</Box>
		</PageContainer>
	);
};
