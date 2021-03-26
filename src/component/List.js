import React from 'react'
import { connect } from 'react-redux'
import { AiTwotoneDelete } from 'react-icons/ai'
import { deleteTodo } from '../actions'
const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo.message}
          <button
            className='icon'
            onClick={() => props.dispatch(deleteTodo(todo.id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos.data,
})
export default connect(mapStateToProps)(List)
