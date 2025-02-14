import React from 'react';
import Task from '@components/Task/index';
import ColumnDescription from '@components/ColumnDescription';
import { Board, ColumnContent, TaskList } from '@components/Column/styled';
import { theme } from '@constants/theme';
import { ThemeProvider } from 'styled-components';
import { BADGES } from '@constants/badge';
import useLoadTasks from '@hooks/useLoadTasks';

const Column: React.FC = () => {
	const tasks = useLoadTasks();

	return (
		<ThemeProvider theme={theme}>
			<Board>
				{Object.keys(tasks).map((column: Task['column']) => (
					<ColumnContent key={column}>
						<ColumnDescription column={column} badge={tasks[column].length}/>
						<TaskList>
							{tasks[column].map((task: Task) => (
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
						</TaskList>
					</ColumnContent>
				))}
			</Board>
		</ThemeProvider>
	);
};

export default Column;
