import React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Grid,
	Typography,
	Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
	return (
		<Box sx={{ flexGrow: 1 }} mt={1}>
			<AppBar position="static">
				<Container fixed>
					<Toolbar>
						<Grid container textAlign={"center"}>
							<Grid item xs={12}>
								<Typography variant="h5">
									Made with <FavoriteIcon color="error" /> by{" "}
									<Link
										href="https://github.com/P-d0309"
										target={"_blank"}
										color="#FFF"
										underline={"none"}
									>
										Paresh Parmar
									</Link>
								</Typography>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
