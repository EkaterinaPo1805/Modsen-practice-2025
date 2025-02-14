import { IconProps } from '@appTypes/icon';
import PlusPath from '@components/PlusPath';
import { useTheme } from 'styled-components';

const BorderedPlusIcon: React.FC<IconProps> = ({ size = 40, color }) => {
	const theme = useTheme();
	color = theme.colors.text;
	const stroke = theme.colors.gray;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke={stroke} />
			<PlusPath color={color} />
		</svg>
	);
};

export default BorderedPlusIcon;
