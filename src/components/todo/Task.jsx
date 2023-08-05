import React from "react";
import { useSelector } from "react-redux";
import styles from "./Task.module.css";

const Task = () => {
	const tasksLength = useSelector((state) => {
		return state.toDo.todoList.length;
	});
	return (
		<div className={styles.taskDiv}>
			{tasksLength === 0 ? (
				<p>No task added</p>
			) : tasksLength === 1 ? (
				<p>1 task added</p>
			) : tasksLength > 1 ? (
				<p>{`${tasksLength}`} tasks added</p>
			) : null}
		</div>
	);
};

export default Task;
