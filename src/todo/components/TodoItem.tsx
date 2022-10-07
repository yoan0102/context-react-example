import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface props {
  todo: Todo
}
const TodoItem = ({ todo }: props) => {
  const { toogleTodo } = useTodos()

  const handleDobleClik = () => {
    toogleTodo(todo.id)
  }

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleDobleClik}
    >
      {todo.desc}
    </li>
  )
}

export default TodoItem
