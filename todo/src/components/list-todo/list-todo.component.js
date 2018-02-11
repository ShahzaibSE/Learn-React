import React from 'react';
import { Form } from 'react-dom';

// Common.
import ToDoDetail from './../todo-detail/todo-detail.component';

class ListToDoComponent extends React.Component {
    listtodos = [
        { id: 1, name: "Todo-1" },
        { id: 2, name: "Todo-2" },
        { id: 3, name: "Todo-3" },
        { id: 4, name: "Todo-4" },
        { id: 5, name: "Todo-5" },
    ];

    myToDos(arr, keyname) {
        let result = arr.map( async value => {
            return value[keyname];
        })
        console.log(result);
        return result;
    }

    renderTodDoDetail(todo) {
        return(
            <ToDoDetail key={todo} todo={todo}/>
        );
    }

    render(){
        let sampleArr = this.myToDos(this.listtodos, 'id');
        console.log(sampleArr);
        return(
            <div>
                <h1>List Component</h1>
                {this.listtodos.map( element => {
                    // return element.name;
                    return <ToDoDetail key={element} todo={element}/>;
                })}
                {/* {this.myToDos(this.listtodos, 'id').map( element => {
                    return element;
                })};
                {this.myToDos(this.listtodos, 'name').map( element => {
                    return element;
                })}; */}
            </div>
        );
    }
}

export default ListToDoComponent;