import { TaskCard } from '@appTypes/task';
import {
	TaskWrapper,
	TaskContent,
	TaskTitle,
	TaskDescription,
} from '@components/Task/styled';
import Badge from '@components/Badge';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';
import useDefineColor from '@hooks/useDefineColor';
import { BADGES } from '@constants/badge';

const Task: React.FC<TaskCard> = ({ title, description, badge, column }) => {
	const color = useDefineColor(badge ?? BADGES.OK, column);
	return (
		<ThemeProvider theme={theme}>
			<TaskWrapper>
				{badge && <Badge badge={badge} color={color} />}
				{title && (
					<TaskContent>
						<TaskTitle>{title}</TaskTitle>
						<TaskDescription>{description}</TaskDescription>
					</TaskContent>
				)}
			</TaskWrapper>
		</ThemeProvider>
	);
};

export default Task;
