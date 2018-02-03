import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components.
import AddToDoComponent  from './components/add-todo/add-todo.component';
import ListToDoComponent  from './components/list-todo/list-todo.component';

class App extends Component {
  render() {
    return ([
      <AddToDoComponent></AddToDoComponent>,
      <ListToDoComponent></ListToDoComponent>,
    ]);
  }
}

export default App;
