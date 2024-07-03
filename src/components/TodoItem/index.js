import React, {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // Call a function to save updated title (not implemented in this code)
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li className={`todo-item ${todoDetails.completed ? 'completed' : ''}`}>
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
              className="edit-input"
            />
            <button
              onClick={this.handleSave}
              type="button"
              className="save-btn"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
              className="checkbox"
            />
            <p className="title">{todoDetails.title}</p>
            <button
              onClick={this.handleEdit}
              type="button"
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
