import React from 'react';

const todoDetail = ({todo}) => {  // Destructuring incoming object.
    return (
        <div>
            <h1>{todo.id}</h1>
            <h3>{todo.name}</h3>
        </div>
    );  
} 

export default todoDetail;