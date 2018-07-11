import React, { Component } from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

import 'todomvc-app-css/index.css'

class TodoApp extends Component {
  state = {
    draft: '',
    todos: []
  }
  handleDraftChange = draft => {
    this.setState({
      draft
    })
  }
  handleAddTodo = () => {
    const { draft: title } = this.state
    if (title) {
      const newTodo = {
        title,
        id: Date.now()
      }
      this.setState(state => ({
        draft: '',
        todos: [...state.todos, newTodo]
      }))
    }
  }
  render () {
    const { draft, todos } = this.state
    return (
      <div className="todoapp">
        <section className="header">
          <h1>todo</h1>
          <NewTodo
            draft={draft}
            onDraftChange={this.handleDraftChange}
            onAddTodo={this.handleAddTodo}
          />
        </section>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp
