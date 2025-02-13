import React, { useState } from 'react';
import { initialTasks } from '@constants/initialTasks';
import Task from '@components/Task/index';
import ColumnDescription from '@components/ColumnDescription';
import { Board, ColumnContent, TaskList } from '@components/Column/styled';
import { theme } from '@constants/theme';
import { ThemeProvider } from 'styled-components';
import { BADGES } from '@constants/badge';

const Column: React.FC = () => {
	const [tasks, setTasks] = useState(initialTasks);

	return (
		<ThemeProvider theme={theme}>
			<Board>
				{Object.keys(tasks).map((column) => (
					<ColumnContent key={column}>
						<ColumnDescription column={column} badge={tasks[column as keyof typeof tasks].length}/>
						<TaskList>
							{tasks[column as keyof typeof tasks].map((task) => (
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
								badge={BADGES.ADD_TASK}
								column={column as keyof typeof tasks}
							/>
						</TaskList>
					</ColumnContent>
				))}
			</Board>
		</ThemeProvider>
	);
};

export default Column;
