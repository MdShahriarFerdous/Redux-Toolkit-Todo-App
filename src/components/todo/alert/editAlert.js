import Swal from "sweetalert2";
import store from "../../../redux/store/store";
import { editItem } from "../../../redux/features/todo/toDoSlice";

export const updateItem = async (index, itemObj) => {
	await Swal.fire({
		input: "text",
		title: "Update Task",
		inputPlaceholder: "Type Task Name...",
		inputValue: itemObj.item,
		inputAttributes: {
			"aria-label": "Type your task here",
		},
		showCancelButton: true,
		confirmButtonText: "Yes, update it!",
		inputValidator: (value) => {
			if (value)
				store.dispatch(
					editItem({
						index: index,
						newItem: { id: itemObj.id, item: value },
					})
				);
		},
	});
};
