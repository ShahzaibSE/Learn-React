import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components.
import AddToDoComponent  from './components/add-todo/add-todo.component';
import ListToDoComponent  from './components/list-todo/list-todo.component';
import NavbarComponent from './components/nav_bar/nav-bar.component';

class App extends Component {
  render() {
    return (
      // <AddToDoComponent></AddToDoComponent>
      <NavbarComponent></NavbarComponent>
    );
  }
}

export default App;
