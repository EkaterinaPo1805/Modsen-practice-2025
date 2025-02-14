import styled from 'styled-components';

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.extra_large};
	padding: ${({ theme }) => theme.spacing.medium};
	background-color: ${({ theme }) => theme.colors.light_gray};
	border-radius: ${({ theme }) => theme.borderRadius.column_radius};
`;
