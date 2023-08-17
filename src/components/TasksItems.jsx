import { useContext } from "react";
import { TodoContext } from "../context/todo";

export function TasksItems ({ task }) {
	const { listItem, deleteElement, changeStateOfCompleted } = useContext(TodoContext)
	const handleDelete = (task) => {
		deleteElement(task)
	}

	const handleCheckbox = (task) => {
		changeStateOfCompleted(task)
	};

    return (listItem.map((task) => {
        const { taskId, taskName } = task
        return (
        <li 
            key={taskId} 
            className={`flex rounded p-3 gap-1 my-2 bg-zinc-900 transition duration-500 ease ${task.complete ? "outline outline-offset-2 outline-1 outline-teal-300  text-teal-300" : "ouline-n"}`}>
            <div className="my-auto ml-1 mr-3 hover:opacity-90">
                <div htmlFor='completed-check' onClick={() => handleCheckbox(task)}>
                    <div className="w-4 h-4 border bg-zinc-50 rounded-full cursor-pointer flex">
                            <div className={`w-3 h-3 border rounded-full cursor-pointer m-auto ${task.complete ? "bg-teal-300": "bg-zinc-500"}`}></div>
                    </div>
                </div>
                <input type="checkbox" id='completed-check' hidden />
            </div>

            <div className="w-11/12 flex">
                <p className={`my-auto ${task.complete ? "line-through" :"no-underline"}`}>{ taskName } </p> 
            </div>
            
            <button className="w-20 h-8 text-red-800 font-bold tracking-wide rounded border border-red-800 bg-zinc-900 cursor-pointer transition delay-100 duration-200 ease-in-out hover:opacity-70" 
                    onClick={() => {handleDelete(task)}}>
                Delete
            </button>
        </li>
        )
    })
    )
}