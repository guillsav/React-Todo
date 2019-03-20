import React, {Component} from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos,
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>My Todo App</h2>
        {this.state.todos.map(({task, id, completed}) => {
          return <TodoList key={id} task={task} completed={completed} />;
        })}
        <TodoForm onChange={this.handleChanges} addTodo={this.handleAddTodo} />
      </div>
    );
  }
}
