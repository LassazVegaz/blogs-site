import {
	Box,
	Container,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { Bed as BedIcon } from "@mui/icons-material";

const BlogItem = () => {
	return (
		<ListItemButton>
			<ListItemIcon>
				<BedIcon />
			</ListItemIcon>
			<ListItemText primary="Blog 1" secondary="Author: James" />
		</ListItemButton>
	);
};

export const BlogsListPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				py: 3,
			}}
		>
			<Typography variant="h3" textAlign="center">
				Available Blogs
			</Typography>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<List
					sx={{
						mt: 10,
						width: 600,
					}}
				>
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</List>
			</Box>
		</Container>
	);
};