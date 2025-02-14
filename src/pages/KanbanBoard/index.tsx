import DashboardTitle from '@components/DashboardTitle';
import { KanbanPage } from './styled';
import Board from '@components/Board';

const KanbanBoard: React.FC = () => {
	return (
		<KanbanPage>
			<DashboardTitle />
			<Board />
		</KanbanPage>
	);
};

export default KanbanBoard;
