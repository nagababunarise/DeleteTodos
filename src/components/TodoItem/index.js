import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <div>
        <button onClick={handleClick} type="button" className="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
