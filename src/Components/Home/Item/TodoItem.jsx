import React from "react";
import Check from "./Check";
import { FaTrashAlt } from 'react-icons/fa'

export default function TodoItem({todo, changeTodo, removeTodo, setCount, count, planed, setPlaned}) {
    const handleClickChange = () => {
        changeTodo(todo._id)
        setCount(todo.isCompleted ? count + 1 : count - 1)
        setPlaned(todo.isCompleted === true ? planed - 1 : planed + 1)
    }

    const handleClickRemove = () => {
        removeTodo(todo._id)
        setCount(todo.isCompleted === true ? count - 1 : count)
        setPlaned(todo.isCompleted === true ? planed : planed - 1)
    }

    return (
        <div className='z-5 border-none w-full flex items-center justify-start mb-10 rounded-2xl bg-gray-800 p-6'>
            <button onClick={handleClickChange} className={`${todo.isCompleted ? 'line-through' : ''}`}>
                <div className="flex">
                    <Check isCompleted={todo.isCompleted}/> <span className="flex items-center mr-4 text-left break-all"> {todo.title} </span>
                </div>
            </button> 
            <button onClick={ handleClickRemove } className='ml-auto'>
                <FaTrashAlt 
                size={30} 
                className='hover:text-red-700 transition-colors ease-in-out duration-300' 
                />
            </button>  
        </div>
    )
}