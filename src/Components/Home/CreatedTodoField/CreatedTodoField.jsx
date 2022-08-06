import React, {useState} from "react";
import {VscAdd} from 'react-icons/vsc'
import {AiTwotoneEdit} from 'react-icons/ai'

const CreatedTodoField = ({setTodos}) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [...prev, {_id: new Date(), title: title, isCompleted: false}])
        setTitle('')
    }


    return (
        <div className="w-4/5 lg:w-full h-40 lg:h-20 flex items-center justify-items-center mx-auto z-10 bg-gray-900 text-2xl fixed bottom-0 left-0 right-0">
    
        <input placeholder={'Add new task!'} 
            className="flex items-center z-20 w-full bg-transparent h-16 text-white mr-2 pl-6 border-none outline-none relative" 
            onKeyPress={e => e.key === 'Enter' && title ? addTodo(title) : false} 
            type="text" 
            onChange={e => setTitle(e.target.value)} 
            value={title}
        /> 

        {!title && <AiTwotoneEdit className="absolute left-48 z-10"></AiTwotoneEdit>}
    
        <button className="border-box min-w-4rem w-16 h-16 rounded-[18px] 
                flex justify-center ml-auto items-center mr-0 lg:mr-6 text-white" 
                onClick={() => title ? addTodo(title) : false} 
                style={{'background': 'linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)'
        }}>
            {  <VscAdd className="w-6 h-6 flex items-center"/> }
        </button>
        
        </div>
        
    )
}

export default CreatedTodoField
