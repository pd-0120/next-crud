import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";

export default function ListTasks() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isDataLoading, setIsDataLoading] = useState(false);

	const router = useRouter();
	const getPosts = () => {
		setIsDataLoading(true);
		setIsDataLoading(true);
		axios.get("/api/tasks").then((res) => {
			setIsDataLoading(false);
			setPosts(res.data);
		});
	}

	useEffect(() => {
		getPosts()
	}, [])

	const handleAction = (action, id) => {
		if (action === "edit") {
			router.push(`/edit-task/${id}`);
		} else {
			setIsLoading(true);
			axios.delete(`/api/tasks/${id}/delete`).then(() => {
				setIsLoading(false);
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
						{isDataLoading &&
							[...Array(5)].map((v, i) => (
								<TableRow key={i}>
									<TableCell><Skeleton/></TableCell>
									<TableCell><Skeleton/></TableCell>
									<TableCell><Skeleton/></TableCell>
									<TableCell><Skeleton/></TableCell>
									<TableCell><Skeleton/></TableCell>
								</TableRow>
							))}
						{posts.length > 0 &&
							posts.map((post, i) => {
								return (
									<TableRow key={i}>
										<TableCell>{post.name}</TableCell>
										<TableCell>
											{post.description}
										</TableCell>
										<TableCell>{post.status}</TableCell>
										<TableCell>{post.createdAt}</TableCell>
										<TableCell>
											<Button
												variant="contained"
												sx={{ mt: 1, ml: 1 }}
												onClick={() =>
													handleAction(
														"edit",
														post.id
													)
												}
											>
												<CreateIcon />
											</Button>
											<Button
												variant="contained"
												disabled={isLoading}
												color={"error"}
												sx={{ mt: 1, ml: 1 }}
												onClick={() =>
													handleAction(
														"delete",
														post.id
													)
												}
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
