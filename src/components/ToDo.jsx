import { useId, useState } from "react";
import { useControlateInput } from '../hooks/useControlateInput.jsx';
import { useContext } from "react";
import { TodoContext } from "../context/todo.jsx";
import { TasksItems } from './TasksItems.jsx'

export function ToDo () {
	const [task, setTask] = useState('');
	const inputID = useId();
	const { error } = useControlateInput(task);
	const { listItem , apendElement, deleteAll } = useContext(TodoContext)

	const handleSubmitTask = (event) => {
		event.preventDefault();
		if (error) return;
		apendElement(task);
		setTask('')
	};

	const handleChangeInputTask = (event) => {
		const newTask = event.target.value
		setTask(newTask)
	};

  return (
    <main className="w-4/5 flex flex-col justify-center m-auto">
			<form 
				onSubmit={handleSubmitTask}
				className="my-4 flex w-full justify-center">
				<input 
					id={inputID} 
					onChange={handleChangeInputTask}
					type="text" 
					value={task}
					autoComplete="not"
					placeholder="Make the dinner..."
					className="w-8/12 bg-transparent border-2 border-zinc-100 rounded py-1 px-2 text-base tracking-wide focus:outline-teal-300" 
				/>
				<button className="ml-2 w-24 font-semibold text-teal-300 tracking-wider bg-neutral-900 border-2 font-s border-teal-300 rounded py-2 p-3 transition delay-200 duration-200 ease-in-out hover:bg-neutral-800 text-base">
					Enter
				</button>
			</form>
			<div className="text-center tracking-wide font-bold text-red-800">{error}</div>
			<section className="container w-4/5 flex flex-col m-auto">
				<ul className="w-full flex flex-col justify-center">
					<TasksItems tasks={task}/>
				</ul>
				{listItem.length >= 2 
					? <button 
						onClick={deleteAll}
						className=" w-28 p-1 m-auto text-red-700 font-bold tracking-wide rounded border border-red-800 bg-zinc-900 cursor-pointer transition delay-100 duration-200 ease-in-out hover:opacity-90">
							Delete All
					  </button> 
					: null
				}
			</section>
    </main>
  )
};