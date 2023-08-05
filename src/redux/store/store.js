import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todo/toDoSlice";

const store = configureStore({
	reducer: {
		toDo: toDoReducer,
	},
});
export default store;
