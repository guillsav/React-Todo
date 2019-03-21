import React from 'react';

import './Todo.css';

const TodoForm = ({onChange, addTodo, task, clearTodo, todos}) => {
  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        required
        className="task"
        onChange={onChange}
        name="task"
        value={task}
        placeholder="Add topic..."
      />
      <button className="add-todo" type="submit">
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
