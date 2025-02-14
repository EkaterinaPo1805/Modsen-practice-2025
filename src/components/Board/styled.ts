import styled from 'styled-components';

export const BoardContent = styled.section`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing.extra_large};
	width: 973px;
	margin: ${({ theme }) => theme.spacing.double_extra_large};
`;