import React, { Component } from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

import todoStore from '../../stores/todoStore'

import 'todomvc-app-css/index.css'

import dispatcher from '../../dispatcher'


class TodoApp extends Component {
  state = {
    draft: todoStore.getDraft(),
    todos: todoStore.getTodos()
  }
  handleCambio = () => {
    this.setState({
      todos: todoStore.getTodos(),
      draft: todoStore.getDraft()
    })
  }
  componentDidMount () {
    todoStore.addChangeListener(this.handleCambio)
  }
  handleDraftChange = draft => {
    dispatcher.dispatch({
      actionType: 'DRAFT_CHANGE',
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
      dispatcher.dispatch({
        actionType: 'ADD_TODO',
        newTodo
      })
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
