import { useSelector } from "react-redux"

export const Todos = () => {

    const todos = useSelector(state => state.todos)
    console.log(todos)

  return (
    <div>Todos</div>
  )
}
