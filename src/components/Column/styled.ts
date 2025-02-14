import styled from 'styled-components';

export const Board = styled.section`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing.extra_large};
	width: 973px;
	margin: ${({ theme }) => theme.spacing.double_extra_large};
`;

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.extra_large};
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.light_gray};
	border-radius: ${({ theme }) => theme.borderRadius.column_radius};
`;

export const TaskList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.medium};
	margin: 0px ${({ theme }) => theme.spacing.medium};
`;
