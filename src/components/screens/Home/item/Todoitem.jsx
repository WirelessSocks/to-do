import React from 'react';
import Check from './Check';


const Todoitem = ({todo, changeTodo}) => {
    return (
        <button className='flex items-center mb-2 rounded-2xl bg-gray-800 p-5 w-full' 
            onClick={() => changeTodo(todo._id)}
        >
            <Check/>
            {todo.title}
        </button>
    );
}

export default Todoitem;