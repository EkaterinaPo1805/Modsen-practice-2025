import { BADGES } from '@constants/badge';
import { TaskBadge } from '@components/Badge/styled';
import { Badge } from '@appTypes/badge';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';

const Badge: React.FC<Badge> = ({ badge, color }) => {
	let badgeText: string;
	badgeText = typeof badge === 'number' ? `${badge}` : badge;
	return (
		<ThemeProvider theme={theme}>
			<TaskBadge badge={badge} color={color}>{badgeText}</TaskBadge>
		</ThemeProvider>
	);
};

export default Badge;
