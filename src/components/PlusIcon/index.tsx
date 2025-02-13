import { IconProps } from '@appTypes/icon';
import PlusPath from '@components/PlusPath';
import React from 'react';
import { useTheme } from 'styled-components';

const PlusIcon: React.FC<IconProps> = ({ size = 24, color }) => {
	const theme = useTheme();
	color = theme.colors.white;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<PlusPath color={color} />
		</svg>
	);
};

export default PlusIcon;
