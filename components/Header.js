import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container } from "@mui/material";

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container fixed>
					<Toolbar>
						<Link href="/">
							<Typography
								variant="h6"
								component="div"
								sx={{ flexGrow: 1 }}
							>
								Next JS CRUD
							</Typography>
						</Link>

						<Link href="/add-task">
							<Button color="inherit">Add New Task</Button>
						</Link>
						<Link href="/list-tasks">
							<Button color="inherit">List Tasks</Button>
						</Link>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
