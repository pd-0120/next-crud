import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";

export default function ListTasks() {
	const [posts, setPosts] = useState([]);
	const router = useRouter();
	const getPosts = () => {
		axios.get("/api/tasks").then((res) => setPosts(res.data));
	}

	useEffect(() => {
		getPosts()
	}, [])

	const handleAction = (action, id) => {
		if (action === "edit") {
			router.push(`/edit-task/${id}`);
		} else {
			axios.delete(`/api/tasks/${id}/delete`).then(() => {
				getPosts();
			})
		
		}
	}
	return (
		<Box>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name:</TableCell>
							<TableCell>Description:</TableCell>
							<TableCell>Status:</TableCell>
							<TableCell>Created AT:</TableCell>
							<TableCell>Action:</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{posts.length > 0 && posts.map((post, i) => {
						return (
							<TableRow key={i}>
								<TableCell>{post.name}</TableCell>
								<TableCell>{post.description}</TableCell>
								<TableCell>{post.status}</TableCell>
								<TableCell>{post.createdAt}</TableCell>
								<TableCell>
									<Button
										variant="contained"
										sx={{ mt: 1, ml: 1 }}
										onClick={() => handleAction("edit", post.id)}
									>
										<CreateIcon />
									</Button>
									<Button
										variant="contained"
										color={"error"}
										sx={{ mt: 1, ml: 1 }}
										onClick={() => handleAction("delete", post.id)}
									>
										<DeleteIcon />
									</Button>
								</TableCell>
							</TableRow>
						);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
