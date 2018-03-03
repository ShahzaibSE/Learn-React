import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-dom";
import { Alert } from 'reactstrap';

class AddToDoComponent  extends React.Component {
    todo_list = [];
    constructor(props) {
      super(props);
      this.state = {name: '', createdAt: new Date(), todos: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
      if (this.state.name) {
        console.log('Your todo');
        this.todo_list.push({
          id: Math.floor((Math.random() * 100)+1), 
          name : event.target.value,
          createdAt: new Date()
         });
      }
      console.log('Todo list');
      console.log(this.todo_list);
      if (this.todo_list.length > 0) {
        localStorage.setItem('todos', Object.toString(this.todo_list));
      }
      this.setState({todos: this.todo_list});
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault(); // Stopping 'click' prevent.
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default AddToDoComponent;