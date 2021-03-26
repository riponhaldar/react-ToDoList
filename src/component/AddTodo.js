import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { HiEmojiHappy } from 'react-icons/hi'
const AddTodo = (props) => {
  return (
    <>
      <div className='container'>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            let input = e.target.userInput.value.trim()
            props.dispatch(addTodo(input))

            e.target.userInput.value = ''
          }}
        >
          <input type='text' name='userInput' placeholder='type any' />
          <button className='form-btn'>
            press
            <HiEmojiHappy />{' '}
          </button>
        </form>
      </div>
    </>
  )
}

export default connect()(AddTodo)
