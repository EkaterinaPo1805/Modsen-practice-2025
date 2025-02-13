import styled from 'styled-components';

export const TaskWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: flex-start;
	padding: ${({ theme }) => theme.spacing.medium};
	gap: ${({ theme }) => theme.spacing.extra_large};
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.border};
	box-shadow:
		0px 4px 8px -2px ${({ theme }) => `${theme.colors.shadow}1A`},
		0px 2px 4px -2px ${({ theme }) => `${theme.colors.shadow}0F`};
	border-radius: ${({ theme }) => theme.borderRadius.task_radius};
`;

export const TaskContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.small};
	color: ${({ theme }) => theme.colors.text};
`;

export const TaskTitle = styled.h2`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.h2};
	line-height: ${({ theme }) => theme.lineHeight.medium};
	letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
	color: ${({ theme }) => theme.colors.title};
`;

export const TaskDescription = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	font-size: ${({ theme }) => theme.fontSize.h2};
	line-height: ${({ theme }) => theme.lineHeight.large};
	color: ${({ theme }) => theme.colors.text};
`;
