import React from 'react';

const Todo = ({task, onClick}) => {
  return (
    <div className="todo">
      <p onClick={onClick}>{task}</p>
    </div>
  );
};

export default Todo;
