import React from 'react';

import './Todo.css';

const TodoForm = ({onChange, addTodo, task, clearTodo, todos}) => {
  return (
    <form className="todo-form">
      <input
        className="task"
        onChange={onChange}
        name="task"
        value={task}
        placeholder="Add topic..."
      />
      <button className="add-todo" onClick={addTodo}>
        Add Topic
      </button>
      <button
        className={`${todos.length > 0 ? 'clear-todo' : 'disabled'}`}
        onClick={clearTodo}
      >
        Remove Completed topics
      </button>
    </form>
  );
};

export default TodoForm;
