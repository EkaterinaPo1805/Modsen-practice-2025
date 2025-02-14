import Column from '@components/Column';
import DashboardTitle from '@components/DashboardTitle';
import { KanbanPage } from './styled';

const KanbanBoard: React.FC = () => {
	return (
		<KanbanPage>
			<DashboardTitle />
			<Column />
		</KanbanPage>
	);
};

export default KanbanBoard;
