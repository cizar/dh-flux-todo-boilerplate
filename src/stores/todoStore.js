import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

let todos = []
let draft = ''

const CHANGE_EVENT = 'change'

class TodoStore extends EventEmitter {
  getTodos () {
    return todos
  }
  getDraft () {
    return draft
  }
  addChangeListener (callback) {
    this.addListener(CHANGE_EVENT, callback)
  }
  emitChange () {
    this.emit(CHANGE_EVENT)
  }
}

const todoStore = new TodoStore()

dispatcher.register(action => {
  switch (action.actionType) {
    case 'ADD_TODO':
      todos = [ ...todos, action.newTodo]
      draft = ''
      todoStore.emitChange()
      break
    case 'DRAFT_CHANGE':
      draft = action.draft
      todoStore.emitChange()
    default:
      // nada por aca
  }
})

export default todoStore
