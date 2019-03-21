import React, {Component} from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

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

    const {task} = this.state;

    if (task) {
      const newTodo = {
        task,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  handleCompletedTodo = () => {
    const todos = this.state.todos;
  };

  // handeClearTodo = e => {
  //   e.preventDefault();

  // };

  render() {
    return (
      <div className="app">
        <h2>TODOS</h2>
        {this.state.todos.map(({task, id, completed}) => {
          return (
            <TodoList
              key={id}
              task={task}
              completed={completed}
              onClick={this.handleCompletedTodo}
            />
          );
        })}
        <TodoForm onChange={this.handleChanges} addTodo={this.handleAddTodo} />
      </div>
    );
  }
}
