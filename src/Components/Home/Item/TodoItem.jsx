import React from "react";
import Check from "./Check";
import { FaTrashAlt } from 'react-icons/fa'

export default function TodoItem({todo, changeTodo, removeTodo}) {
    
    return (
        <div className='z-5 border-none w-full flex items-center justify-start mb-10 rounded-2xl bg-gray-800 p-6'>
            <button onClick={() => changeTodo(todo._id)} className={`${todo.isCompleted ? 'line-through' : ''}`}>
                <div className="flex"><Check isCompleted={todo.isCompleted}/> <span className="flex items-center mr-4 text-left"> {todo.title} </span></div>
            </button> 
            <button onClick={() => removeTodo(todo._id)} className='ml-auto'>
                <FaTrashAlt 
                size={30} 
                className='hover:text-red-700 transition-colors ease-in-out duration-300' 
                />
            </button>  
        </div>
    )
}