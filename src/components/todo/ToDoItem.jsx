import React, { useState } from "react";
import styles from "./ToDoItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "./alert/editAlert";
import { deleteItem } from "../../redux/features/todo/toDoSlice";
import Swal from "sweetalert2";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ToDoItem = () => {
	const todoList = useSelector((state) => state.toDo.todoList);
	const dispatch = useDispatch();

	const [checkedItems, setCheckedItems] = useState({});

	const handleCheckboxChange = (itemId) => {
		setCheckedItems((prevCheckedItems) => ({
			...prevCheckedItems,
			[itemId]: !prevCheckedItems[itemId],
		}));
	};

	const handleItemDelete = (itemId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteItem(itemId));
				Swal.fire("Deleted!", "Your task has been deleted.", "success");
			}
		});

		setCheckedItems((prevCheckedItems) => {
			const { [itemId]: removedItem, ...rest } = prevCheckedItems;
			return rest;
		});
	};

	return (
		<>
			{todoList.length !== 0 &&
				todoList.map((itemObj) => {
					const { id, item } = itemObj;
					const isItemChecked = checkedItems[id];

					return (
						<div
							key={id}
							className={`card-body my-3 shadow-sm ${styles.cardDiv}`}
						>
							<input
								className={`${styles.checkBox}`}
								type="checkbox"
								checked={isItemChecked}
								onChange={() => handleCheckboxChange(id)}
							/>
							<h5
								style={{
									textDecorationColor: isItemChecked,
									textDecoration: isItemChecked
										? "line-through #e74d42"
										: "none",
								}}
							>
								{item}
							</h5>
							<button
								style={{ display: isItemChecked && "none" }}
								className={`me-3 ${styles.editbtn}`}
								onClick={() => {
									updateItem(id, itemObj);
								}}
							>
								Edit
								<AiOutlineEdit className={styles.editIcon} />
							</button>
							{isItemChecked && (
								<p
									style={{
										marginRight: "8px",
										marginTop: "14px",
										color: "#acaaad",
									}}
								>
									completed
								</p>
							)}
							<button
								onClick={() => {
									handleItemDelete(id);
								}}
								className={`${styles.deletebtn}`}
							>
								Delete
								<AiOutlineDelete
									className={styles.deleteIcon}
								/>
							</button>
						</div>
					);
				})}
		</>
	);
};

export default ToDoItem;
