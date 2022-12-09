import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteTodo} = this.props
    const {id, title} = todoDetails
    const onDeleteTodo = () => {
      deleteTodo(id)
    }

    return (
      <li className="list-item-style">
        <p className="title">{title}</p>
        <button type="button" className="button-style" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
