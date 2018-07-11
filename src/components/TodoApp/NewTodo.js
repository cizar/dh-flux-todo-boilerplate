import React from 'react'

const NewTodo = ({ draft, onDraftChange, onAddTodo }) => {
  function handleSubmit (event) {
    event.preventDefault()
    onAddTodo()
  }
  function handleChange (event) {
    onDraftChange(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" autoFocus className="new-todo" value={draft} onChange={handleChange}/>
    </form>
  )
}

export default NewTodo
