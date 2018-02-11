import React from 'react';
import { Router, Route, Link } from 'react-dom';
import { Alert } from 'reactstrap';

class AddToDoComponent extends React.Component {
    todos_arr = [];

    constructor() {
        super();
        this.state = {
            // id : '',
            // name : ''
            todos : []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if (this.todos_list.length > 0) {
            console.log('You have todos!');
        }else {
            console.log('No todos found.');
        }
    }

    handleChange(event) {
        let todo =  { id: Math.floor((Math.random() * 100) +  1), name: event.target.name}; 
        if (todo.id && todo.name) {
            this.todos_arr.push(todo);
            <Alert class="success">
              Todo successfully added
            </Alert>
        } else if (!todo.id) {
            <Alert color="danger">
               ID is missing!
            </Alert>
        }else if (!todo.name) {
            <Alert color="danger">
               Please enter name of your todo!
            </Alert>
        }
        // this.setState({
        //     todos : this.todos_arr
        // });
    }

    addToDo() {
        // alert(`Submitted todos : ${this.todo_arr}`);
        console.log(`Submitted todos : ${this.todo_arr}`);
        this.setState({
            todos : this.todos_arr
        });
    }

    render(){
        return(
            <div>
                <h1>Add Component</h1>
                <form>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Enter your todo" value={this.state.name} onChange={this.handleChange}/><br/> 
                    <input type="submit" value="Submit" />
                </form>
                {/* <h1>{this.state.name}</h1> */}
            </div>
        );
    }
}

export default AddToDoComponent;