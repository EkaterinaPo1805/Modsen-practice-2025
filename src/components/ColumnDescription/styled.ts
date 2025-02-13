import { Badge } from '@appTypes/badge';
import { ColumnDescription } from '@appTypes/columnDescription';
import styled from 'styled-components';

export const ColumnDesc = styled.div<{ color: Badge['color'] }>`
	background-color: ${({ color }) => color[0]};
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.small}
		${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small}
		${({ theme }) => theme.spacing.small};
	justify-content: space-between;
	border-radius: ${({ theme }) => theme.borderRadius.column_desc_radius};
`;

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.large};
`;

export const ColumnTitle = styled.h2`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.h2};
	line-height: ${({ theme }) => theme.lineHeight.medium};
	letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
	color: ${({ theme }) => theme.colors.white};
`;
