import React, { useState } from "react";
import Todoitem from "./item/Todoitem";


const todos = [
{
    _id: 'asdasd1',
    title: "Finish marathon",
    isComplited: false
},
{
    _id: 'asdsdfs24',
    title: "Read the next chapter of the book",
    isComplited: false
},
{
    _id: 'ahgfhfg42',
    title: "Do the math for the next monday",
    isComplited: false
}
]


const Home = () => {

    const [] = useState(todos)

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
            {todos.map(todo => (
                <Todoitem key={todo._id} todo= {todo}/>
            ))}
        </div>
    )
}

export default Home;