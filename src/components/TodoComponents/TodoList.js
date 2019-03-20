// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

import './Todo.css';

const TodoList = ({task}) => {
  return (
    <div className="todo-list">
      <Todo task={task} />
    </div>
  );
};

export default TodoList;
