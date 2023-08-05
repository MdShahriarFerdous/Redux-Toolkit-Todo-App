import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
	name: "todo",
	initialState: {
		todoList: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.todoList.push(action.payload);
		},
		deleteItem: (state, action) => {
			const idToDelete = action.payload;
			state.todoList = state.todoList.filter(
				(item) => item.id !== idToDelete
			);
		},
		editItem: (state, action) => {
			const { index, newItem } = action.payload;
			const indexToEdit = state.todoList.findIndex(
				(item) => item.id === index
			);
			if (indexToEdit !== -1) {
				state.todoList[indexToEdit] = newItem;
			}
		},
	},
});

export const { addItem, deleteItem, editItem } = toDoSlice.actions;
export default toDoSlice.reducer;
