import { TaskCard } from '@appTypes/task';

const TASKS_STORAGE_KEY = 'tasks';

export const saveTasksToLocalStorage = (tasks: { [key: TaskCard['column']]: TaskCard[] }) => {
	localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
	const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
	return storedTasks ? JSON.parse(storedTasks) : null;
};
