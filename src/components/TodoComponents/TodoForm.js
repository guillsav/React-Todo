import React from 'react';

const TodoForm = ({onChange, addTodo}) => {
  return (
    <form>
      <input onChange={onChange} name="task" />
      <button onClick={addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
