import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/todo/toDoSlice.js";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
	const dispatch = useDispatch();

	const [item, setItem] = useState("");

	const handleChange = (event) => {
		setItem(event.target.value);
	};
	const handleClick = () => {
		if (item.trim() !== "") {
			dispatch(addItem({ id: uuidv4(), item: item }));
			setItem("");
		} else {
			toast("You have not typed anything!");
		}
	};
	return (
		<div className={` card-body mb-5  ${styles.addItemDiv}`}>
			<input
				name="item"
				value={item}
				onChange={handleChange}
				className={` ${styles.addInput}`}
				type="text"
				placeholder="Task Name"
				autoComplete="off"
			/>
			<button
				type="submit"
				onClick={handleClick}
				className={`${styles.addbtn}`}
			>
				Add Item
			</button>
			<ToastContainer theme="dark" />
		</div>
	);
};

export default AddTodo;
