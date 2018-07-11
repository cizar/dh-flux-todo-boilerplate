import React from 'react'

const TodoItem = ({ title }) =>
  <li>
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>{title}</label>
    </div>
  </li>

export default TodoItem
