// 'use strict'

import React from 'react';
import { Router, Route, Link } from 'react-dom';

class AddToDoComponent extends React.Component {
    todos_list = [];
    state = {
        name: {},
        todos: []
    };

    componentWillMount() {
        if (this.todos_list.length > 0) {
            console.log('You have todos!');
        }
    }

    addToDo(your_todo) {
        this.todos_list.push(your_todo);
        this.setState({
            todos : this.todos_list 
        });
    }

    render(){
        return(
            <div>
                <h1>Add Component</h1>
                <form>
                    <label idName="name"></label>
                    <input type="text" idName="name" placeholder="Enter todo name" value={this.state.name}/><br/> 
                    <input type="submit" value="Submit" onClick = {this.addToDo({id: Math.floor(Math.random() * 100) + 1, name: this.state.name})}/>
                </form>
            </div>
        );
    }
}

export default AddToDoComponent;