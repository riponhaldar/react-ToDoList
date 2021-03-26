import React from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import List from './component/List'
function App() {
  return (
    <div className='App'>
      <h1>TODo List</h1>
      <AddTodo />
      <List />
    </div>
  )
}

export default App
