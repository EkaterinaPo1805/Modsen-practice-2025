import { createReducer } from '@reduxjs/toolkit';
import { loadTasks } from '@store/actions/taskAction';
import {
	loadTasksFromLocalStorage,
	saveTasksToLocalStorage,
} from '@utils/localStorage';
import { initialTasks } from '@constants/initialTasks';

const initialState = loadTasksFromLocalStorage() || initialTasks;

if (!loadTasksFromLocalStorage()) {
	saveTasksToLocalStorage(initialState);
}

const tasksReducer = createReducer(initialState, (builder) => {
	builder.addCase(loadTasks, () => {
		return initialState;
	})
});

export default tasksReducer;
