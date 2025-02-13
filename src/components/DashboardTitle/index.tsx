import React from 'react';

import PlusIcon from '@components/PlusIcon';
import {
	DashboardName,
	DashboardTitleContent,
} from '@components/DashboardTitle/styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';
import BorderedPlusIcon from '@components/BorderedPlusIcon';

const DashboardTitle: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<DashboardTitleContent>
				<DashboardName>Kanban Dashboard</DashboardName>
				<BorderedPlusIcon />
			</DashboardTitleContent>
		</ThemeProvider>
	);
};

export default DashboardTitle;
