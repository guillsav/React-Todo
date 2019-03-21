import React from 'react';

import './Todo.css';

const TodoForm = ({onChange, addTodo}) => {
  return (
    <form className="todo-form">
      <input
        className="task"
        onChange={onChange}
        name="task"
        placeholder="...TODO"
      />
      <button className="add-todo" onClick={addTodo}>
        Add Todo
      </button>
      <button className="clear-todo">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
