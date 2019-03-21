import React from 'react';

import './Todo.css';

const TodoForm = ({onChange, addTodo, task, clearTodo}) => {
  return (
    <form className="todo-form">
      <input
        className="task"
        onChange={onChange}
        name="task"
        value={task}
        placeholder="Add task..."
      />
      <button className="add-todo" onClick={addTodo}>
        Add Task
      </button>
      <button className="clear-todo" onClick={clearTodo}>
        Remove Done
      </button>
    </form>
  );
};

export default TodoForm;
