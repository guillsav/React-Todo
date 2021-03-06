import React from 'react';

const Todo = ({task, targetTodo, id, completed, removeTodo}) => {
  return (
    <div className="todo">
      <p
        className={`${completed ? 'done' : null}`}
        id={id}
        onClick={() => targetTodo(id)}
      >
        {task}
      </p>
      <button
        className={`${completed ? 'check' : null}`}
        onClick={() => removeTodo(id)}
      >{`${completed ? 'Remove' : 'Remove'}`}</button>
    </div>
  );
};

export default Todo;
