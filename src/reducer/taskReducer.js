export const initialState = JSON.parse(globalThis.localStorage.getItem('tasks')) || []

export const taskReducer = (state, action) => {

    const setItemToLocalStorage = (newTasks) => {
        globalThis.localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

	const {type, payload} = action

	switch (type) {

		case 'ADD_TASK': {
			const upperFirts = [payload];
			const modifiedWord = upperFirts[0].charAt(0).toUpperCase() + upperFirts[0].slice(1);

			const newTasks = ([...state, {
			taskName: modifiedWord,
			taskId: crypto.randomUUID(),
			complete: false
		}]);
        setItemToLocalStorage(newTasks) 
		return newTasks
		}
		
		case 'REMOVE_ELEMENT': {
			const newTasks = state.filter(item => item.taskId !== payload.taskId)
            setItemToLocalStorage(newTasks) 
			return newTasks
		}

		case 'CHANGE_COMPLETE': {
			const newTasks = state.map(item => {
				if (item.taskId === payload.taskId) {
					return {
						...payload,
						complete: !item.complete 
					}
				}
				return item;
			})
            setItemToLocalStorage(newTasks) 
			return newTasks
		}

		case 'DELETE_ALL': {
            setItemToLocalStorage([]) 
			return []
		}
	}
		return state
}