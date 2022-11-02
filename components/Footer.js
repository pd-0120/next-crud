import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container fixed></Container>
			</AppBar>
		</Box>
	);
}
