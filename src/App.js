import React, {Component} from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const todos = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now() + 1,
    completed: false
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddTodo = e => {
    e.preventDefault();

    const {task} = this.state;

    const newTodo = {
      task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ''
    });
  };

  // handleCompletedTodo = () => {
  //   const {todos} = this.state;
  //   const newTasks = todos.filter(({completed}) => completed === false);

  //   console.log(newTasks);
  // };

  targetTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    });
  };

  handeClearTodo = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  handleRemoveTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  };

  render() {
    return (
      <div className="app">
        <h2>Topics</h2>

        <TodoForm
          onChange={this.handleChanges}
          addTodo={this.handleAddTodo}
          todos={this.state.todos}
          task={this.state.task}
          clearTodo={this.handeClearTodo}
        />
        <TodoList
          todos={this.state.todos}
          targetTodo={this.targetTodo}
          removeTodo={this.handleRemoveTodo}
        />
      </div>
    );
  }
}
