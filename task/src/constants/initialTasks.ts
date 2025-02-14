import { TaskCard } from '@appTypes/task';
import { BADGES } from './badge';
import { v4 as uuidv4 } from 'uuid';

export const initialTasks: {
	[key in 'To Do' | 'In Progress' | 'Done']: TaskCard[];
} = {
	'To Do': [
		{
			id: uuidv4(),
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.MEDIUM,
			column: 'To Do',
		},
		{
			id: uuidv4(),
			title: 'Blog Copywriting',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			column: 'To Do',
		},
	],
	'In Progress': [
		{
			id: uuidv4(),
			title: 'User flow confirmation for finance app',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.OK,
			column: 'In Progress',
		},
		{
			id: uuidv4(),
			title: 'Healthcare app wireframe flow 👩‍⚕️',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.I_GUESS,
			column: 'Done',
		},
	],
	Done: [
		{
			id: uuidv4(),
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.HIGH,
			column: 'Done',
		},
		{
			id: uuidv4(),
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.LOW,
			column: 'Done',
		},
		{
			id: uuidv4(),
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.IMPORTANT,
			column: 'Done',
		},
	],
};
