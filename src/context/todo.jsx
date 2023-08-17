import { createContext, useReducer, useState } from "react";
import {taskReducer, initialState} from '../reducer/taskReducer.js'

export const TodoContext = createContext();

export function TodoProvider ({children}) {
	const [state, dispach] = useReducer(taskReducer, initialState)
	
	const apendElement = task => dispach ({
			type: 'ADD_TASK',
			payload: task
	})

	const deleteElement = task => dispach ({
			type: 'REMOVE_ELEMENT',
			payload: task
	})

	const changeStateOfCompleted = (task) => dispach({
		type:'CHANGE_COMPLETE',
		payload: task
	})

	const deleteAll = () => dispach ({
		type: 'DELETE_ALL'
	})

	return (
		<TodoContext.Provider value={{
			changeStateOfCompleted,
			deleteElement,
			deleteAll,
			listItem: state,
			apendElement
		}}>
			{children}
		</TodoContext.Provider>
	)
}

