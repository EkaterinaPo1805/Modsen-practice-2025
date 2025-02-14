// src/components/Board.tsx

import React from 'react';
import Column from '@components/Column';
import useLoadTasks from '@hooks/useLoadTasks';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';
import { BoardContent } from './styled';

const Board: React.FC = () => {
	const tasks = useLoadTasks();
	return (
		<ThemeProvider theme={theme}>
			<BoardContent>
				{Object.keys(tasks).map((column: string) => (
					<Column key={column} column={column} tasks={tasks[column]} />
				))}
			</BoardContent>
		</ThemeProvider>
	);
};

export default Board;
