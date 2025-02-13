import styled from 'styled-components';

export const DashboardName = styled.h1`
	font-weight: ${({ theme }) => theme.fontWeight.extrabold};
	font-size: ${({ theme }) => theme.fontSize.h1};
	line-height: ${({ theme }) => theme.lineHeight.extra_large};
	letter-spacing: ${({ theme }) => theme.letterSpacing.small};
	color: ${({ theme }) => theme.colors.title};
`;

export const DashboardTitleContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: ${({ theme }) => theme.spacing.double_extra_large};
	background: ${({ theme }) => theme.colors.light_gray};
`;
