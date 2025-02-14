import { TaskCard } from '@appTypes/task';
import Task from '@components/Task';
import { BADGES } from '@constants/badge';
import { Tasks } from '@components/TaskList/styled';
import { TaskListProps } from '@appTypes/taskList';



const TaskList: React.FC<TaskListProps> = ({ tasks, column }) => {
	return (
		<Tasks>
			{tasks.map((task: TaskCard) => (
				<Task
					key={task.id}
					id={task.id}
					title={task.title}
					description={task.description}
					badge={task.badge}
					column={task.column}
				/>
			))}
			<Task
				key={`new-task-${column}`}
				id={`new-task-${column}`}
				badge={BADGES.ADD_TASK}
				column={column}
			/>
		</Tasks>
	);
};

export default TaskList;
