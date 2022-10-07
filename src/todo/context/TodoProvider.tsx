import { useReducer } from "react"

import { TodoContext } from "./TodoContext"
import { TodoState } from "../interfaces/interfaces"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "Recolectar piedra del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "Recolectar piedra del infinitPiedra del Alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toogleTodo = (id: string) => {
    dispatch({
      type: "toogleTodo",
      payload: { id },
    })
  }
  return (
    <TodoContext.Provider
      value={{
        todoState,
        toogleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
