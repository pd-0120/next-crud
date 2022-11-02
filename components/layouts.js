import Header from "./Header";
import Footer from "./Footer";

import React from "react";
import { Container } from "@mui/material";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Container fixed>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}
