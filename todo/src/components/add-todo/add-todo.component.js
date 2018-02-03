// 'use strict'

import React from 'react';
import { Router, Route, Link } from 'react-dom';

class AddToDoComponent extends React.Component {
    render(){
        return(
            <div>
                <h1>Add Component</h1>
                <form>
                    <label idName="name"></label>
                    <input type="text" idName="name" placeholder="Enter todo name" /><br/> 
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddToDoComponent;