import { loadTasks } from '@store/actions/taskAction';
import { AppDispatch, RootState } from '@store/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useLoadTasks = () => {
	const dispatch = useDispatch<AppDispatch>();
	const tasks = useSelector((state: RootState) => state.tasks);

	useEffect(() => {
		dispatch(loadTasks());
	}, [dispatch]);

	return tasks;
};

export default useLoadTasks;
