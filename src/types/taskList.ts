import { TaskCard } from "./task";

export interface TaskListProps {
	tasks: TaskCard[];
	column: TaskCard['column'];
}