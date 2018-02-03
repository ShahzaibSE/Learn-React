'use strict'

import React from 'react';

const todoDetail = ({todo}) => {  // Destructuring incoming object.
    return (
        <div>
            <h1>{todo.id}</h1>
            <h1>{todo.name}</h1>
        </div>
    );  
} 

export default todoDetail;