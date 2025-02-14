import styled from "styled-components";

export const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.medium};
	margin: 0px ${({ theme }) => theme.spacing.medium};
`;