import React from "react";
import styles from "./ToDoView.module.css";
import AddTodo from "../../../components/todo/AddTodo";
import ToDoItem from "../../../components/todo/ToDoItem";
import Task from "../../../components/todo/Task";

const ToDoView = () => {
	return (
		<div className="container my-5">
			<div className={`card shadow  ${styles.cardClass}`}>
				<h1 className="card-title mt-4 text-center">To-Do</h1>
				<div className="card-body">
					<AddTodo />
					<ToDoItem />
				</div>
				<Task />
			</div>
		</div>
	);
};

export default ToDoView;
