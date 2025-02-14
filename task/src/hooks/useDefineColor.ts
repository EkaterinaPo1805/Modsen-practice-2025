import { Badge } from '@appTypes/badge';
import { ColumnDescription } from '@appTypes/columnDescription';
import { BADGES } from '@constants/badge';
import { theme } from '@constants/theme';

type ColorType = Badge['color'];

const getColor = (
	badge: Badge['badge'],
	column: ColumnDescription['column']
): ColorType => {
	if (badge === BADGES.ADD_TASK) {
		switch (column) {
			case 'To Do':
				return [theme.colors.blue, theme.colors.light_blue];
			case 'In Progress':
				return [theme.colors.orange, theme.colors.light_orange];
			case 'Done':
				return [theme.colors.green, theme.colors.light_green];
			default:
				return [theme.colors.red, theme.colors.white];
		}
	} else if (typeof badge === 'number') {
		switch (column) {
			case 'To Do':
				return [theme.colors.blue, theme.colors.white];
			case 'In Progress':
				return [theme.colors.orange, theme.colors.white];
			case 'Done':
				return [theme.colors.green, theme.colors.white];
			default:
				return [theme.colors.red, theme.colors.white];
		}
	} else {
		switch (badge) {
			case BADGES.HIGH:
				return [theme.colors.red, theme.colors.light_red];
			case BADGES.MEDIUM:
			case BADGES.IMPORTANT:
				return [theme.colors.blue, theme.colors.light_blue];
			case BADGES.OK:
				return [theme.colors.orange, theme.colors.light_orange];
			case BADGES.LOW:
				return [theme.colors.green, theme.colors.light_green];
			case BADGES.I_GUESS:
				return [theme.colors.text, theme.colors.white];
			default:
				return [theme.colors.red, theme.colors.white];
		}
	}
};

const useDefineColor = (
	badge: Badge['badge'],
	column: ColumnDescription['column']
): ColorType => {
	return getColor(badge, column);
};

export default useDefineColor;
