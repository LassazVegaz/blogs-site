import {
	Box,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Fab,
} from "@mui/material";
import { Bed as BedIcon, Add as AddIcon } from "@mui/icons-material";
import { PageContainer } from "../../components/PageContainer";

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
		<>
			<PageContainer>
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
			</PageContainer>

			<Fab
				sx={{
					position: "fixed",
					right: 10,
					bottom: 10,
				}}
			>
				<AddIcon />
			</Fab>
		</>
	);
};
