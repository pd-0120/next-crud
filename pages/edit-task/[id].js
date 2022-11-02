import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../../components/TaskForm";

export default function EditTask() {
	const router = useRouter();
	const [task, setTask] = useState({});
	
	useEffect(() => {
		if (router.query.id) {
			axios.get(`/api/tasks/${router.query.id}`).then((res) => {
				setTask(res.data.post);
			}).catch(() => {
				router.push("/list-tasks");
			});
		} else {
			router.push('/list-tasks')
		}
	}, [router]);


	return <>{Object.entries(task).length > 0 && <TaskForm task={task} />}</>;
}
