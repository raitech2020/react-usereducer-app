import { ACTIONS } from "./Todos"

export const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span
        style={{
          // color: todo.completed ? "#AAA" : "#000",
          color: todo.completed ? "#006400" : "#FF0000",
        }}
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }}
      >
        Delete
      </button>
    </div>
  )
}
