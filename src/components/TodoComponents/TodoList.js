// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

import './Todo.css';

const TodoList = ({task, onClick}) => {
  return (
    <div className="todo-list">
      <Todo task={task} onClick={onClick} />
    </div>
  );
};

export default TodoList;
