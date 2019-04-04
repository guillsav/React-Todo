import React from 'react';

import Todo from './Todo';

import './Todo.css';

const TodoList = ({todos, targetTodo, removeTodo}) => {
  return (
    <div className="todo-list">
      {todos.map(({task, id, completed}) => {
        return (
          <Todo
            key={id}
            id={id}
            task={task}
            completed={completed}
            targetTodo={targetTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
