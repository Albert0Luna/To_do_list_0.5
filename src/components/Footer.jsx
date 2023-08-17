import { useContext } from "react"
import { TodoContext } from "../context/todo"


export function Footer () {

	const { listItem } = useContext(TodoContext)

  return (
    <footer className="m-6 opacity-70">
      {
				JSON.stringify(listItem, null, 0)
      }
    </footer>
  )
}