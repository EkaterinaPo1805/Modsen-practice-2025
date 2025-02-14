import React from 'react';
import ColumnDescription from '@components/ColumnDescription';
import { ColumnContent } from '@components/Column/styled';
import { TaskListProps } from '@appTypes/taskList';
import TaskList from '@components/TaskList';

const Column: React.FC<TaskListProps> = ({ tasks, column }) => {
	return (
		<ColumnContent key={column}>
			<ColumnDescription column={column} badge={tasks.length} />
			<TaskList tasks={tasks} column={column} />
		</ColumnContent>
	);
};

export default Column;
