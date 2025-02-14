import {
	ColumnContent,
	ColumnDesc,
	ColumnTitle,
} from '@components/ColumnDescription/styled';
import PlusIcon from '@components/PlusIcon';
import Badge from '@components/Badge';
import { ColumnDescription } from '@appTypes/columnDescription';
import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';
import useDefineColor from '@hooks/useDefineColor';

const ColumnDescription: React.FC<ColumnDescription> = ({ badge, column }) => {
 const color = useDefineColor(badge, column);
	return (
		<ThemeProvider theme={theme}>
			<ColumnDesc color={color}>
				<ColumnContent>
					<Badge badge={badge} color={color}/>
					<ColumnTitle>{column}</ColumnTitle>
				</ColumnContent>
				<PlusIcon />
			</ColumnDesc>
		</ThemeProvider>
	);
};

export default ColumnDescription;
