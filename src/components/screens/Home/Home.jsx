import React from "react";
import Todoitem from "./Todoitem";


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

    return (
        <div className="bg-gray-900 h-screen text-white">
            {todos.map(todo => (
                <Todoitem key={todo._id} todo= {todo}/>
            ))}
        </div>
    )
}

export default Home;