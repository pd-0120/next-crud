import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React , { useState } from "react";
import axios from 'axios'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const validationSceama = Yup.object().shape({
	name: Yup.string().min(5).max(15).required(),
	description: Yup.string().min(20).max(100).required(),
	status: Yup.string().required(),
});

export default function TaskForm(props) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false)
	const { task } = props
	
	const handleSubmit = (fields, props) => {
		setIsLoading(true);
		if(task) {
			axios
				.put(`/api/tasks/${task.id}/update`, fields)
				.then(() => {setIsLoading(false);router.push("list-tasks");});
		} else {
			axios
				.post("/api/tasks/create", fields)
				.then(() => {setIsLoading(false);router.push("list-tasks");});
		}
	}
	return (
		<Box mt={2}>
			<Formik
				initialValues={{
					name: task ? task.name : '',
					description: task ? task.description : '',
					status: task ? task.status : '',
				}}
				validationSchema={validationSceama}
				onSubmit={(values, props) => {
					handleSubmit(values, props);
				}}
			>
				{({ isSubmitting, errors, touched, handleChange, values }) => (
					<Form>
						<Grid container spacing={2}>
							<Grid item sm={6}>
								<TextField
									id="outlined-basic-name"
									label="Name"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									name="name"
									defaultValue={values.name}
								/>
								<ErrorMessage name="name" />
							</Grid>
							<Grid item sm={6}>
								<TextField
									id="outlined-basic-description"
									label="Description"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									name="description"
									defaultValue={values.description}
								/>
								<ErrorMessage name="description" />
							</Grid>
							<Grid item sm={6}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">
										Status
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										label="Status"
										name="status"
										onChange={handleChange}
										defaultValue={values.status}
									>
										<MenuItem value={"Complete"}>
											Complete
										</MenuItem>
										<MenuItem value={"In-Progess"}>
											In-Progess
										</MenuItem>
										<MenuItem value={"Pending"}>
											Pending
										</MenuItem>
									</Select>
									<ErrorMessage name="status" />
								</FormControl>
							</Grid>
							<Grid item sm={6}></Grid>
							<Grid item sm={6}>
								<Button
									variant={"contained"}
									type={"submit"}
									disabled={isLoading}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</Box>
	);
}
