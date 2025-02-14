import { Badge } from '@appTypes/badge';
import { TaskCard } from '@appTypes/task';
import { BADGES } from '@constants/badge';
import styled from 'styled-components';

export const TaskBadge = styled.div<{
	badge: TaskCard['badge'];
	color: Badge['color'];
}>`
	border-radius: ${({ theme }) => theme.borderRadius.badge_radius};
	font-weight: ${({ theme }) => theme.fontWeight.semi_bold};

	font-size: ${({ badge, theme }) =>
		typeof badge === 'number' ? `${theme.fontSize.h3}` : `${theme.fontSize.h4}`};

	line-height: ${({ badge, theme }) =>
		typeof badge === 'number' ? `${theme.lineHeight.small}` : `${theme.lineHeight.extra_small}`};

	letter-spacing: ${({ badge, theme }) =>
		typeof badge === 'number' ? `${theme.letterSpacing.extra_large}` : `${theme.letterSpacing.large}`};

	padding: ${({ badge }) =>
		typeof badge === 'number' ? '6px 12px' : '4px 8px'};

	color: ${({ color }) => color[0]};
	background-color: ${({ color }) => color[1]};

	box-shadow: ${({ badge, theme }) =>
		badge === BADGES.I_GUESS ? `0 0 0 1px ${theme.colors.gray}` : 'none'};
`;
