import { Task } from '@appTypes/task';
import { BADGES } from './badge';

export const initialTasks: {
	[key in 'To Do' | 'In Progress' | 'Done']: Task[];
} = {
	'To Do': [
		{
			id: '1',
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.MEDIUM,
			column: 'To Do',
		},
		{
			id: '2',
			title: 'Blog Copywriting',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			column: 'To Do',
		},
	],
	'In Progress': [
		{
			id: '3',
			title: 'User flow confirmation for finance app',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.OK,
			column: 'In Progress',
		},
		{
			id: '4',
			title: 'Healthcare app wireframe flow 👩‍⚕️',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.I_GUESS,
			column: 'Done',
		},
	],
	Done: [
		{
			id: '5',
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.HIGH,
			column: 'Done',
		},
		{
			id: '6',
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.LOW,
			column: 'Done',
		},
		{
			id: '7',
			title: 'UI/UX Design in the age of AI',
			description:
				'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
			badge: BADGES.IMPORTANT,
			column: 'Done',
		},
	],
};
