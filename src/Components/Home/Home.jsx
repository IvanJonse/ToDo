import React, {useState} from "react";
import CreatedTodoField from "./CreatedTodoField/CreatedTodoField";
import TodoItem from "./Item/TodoItem";

const data = [
    {   _id: 'eyujey8uuj',
        title: 'Finish the easy collaboration',
        isCompleted: false
    },
    {   _id: 'eyu7jreyuj',
        title: 'Reaf next chapter of the book',
        isCompleted: false
    },
    {   _id: 'eyuj6eyuj',
        title: 'Send the finish assignment',
        isCompleted: false
    }
]

export default function Home() {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => setTodos([...todos].filter(t => t._id !== id))

    return (
        <div className="text-white container-snap w-full h-full mx-auto overflow-auto relative">

            <h1 className="text-2xl font-bold text-center mb-16 sticky top-0 bg-gray-900 pb-5 mt-24 pt-6 lg:mt-16 lg:pt-5">
                ToDo for someone =)
            </h1>
            <div className="w-4/5 flex justify-items-center items-center mx-auto flex-col last: mb-32">
                { todos.length === 0 ? <div className="text-4xl lg:text-3xl px-1 absolute top-1/2 flex items-center justify-items-center
                 font-bold tracking-wide mt-1/2 text-gray-800">ToDo list is empty!</div> : todos.map(todo =>
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
                )}
                
            </div>
           <CreatedTodoField setTodos={setTodos}/>
        </div>
    )
}