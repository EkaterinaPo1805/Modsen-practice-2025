import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@store/index';
import KanbanBoard from '@pages/KanbanBoard/index';
import { GlobalStyles } from '@constants/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';

const root = createRoot(document.getElementById('root')!);
root.render(
	<Provider store={store}>
			<>
				<GlobalStyles />
				<KanbanBoard />
			</>
	</Provider>
);
