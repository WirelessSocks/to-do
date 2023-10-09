import React, { useState } from "react";
import Todoitem from "./item/Todoitem";
import CreateTodoField from "./CreateTodoField/CreateTodoField";

const data = [
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

    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))
    
   

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
            {todos.map(todo => (
                <Todoitem key={todo._id} todo= {todo} changeTodo= {changeTodo}
                    removeTodo= {removeTodo}
                />
            ))}
            <CreateTodoField setTodos= {setTodos}/>
        </div>
    )
}

export default Home;