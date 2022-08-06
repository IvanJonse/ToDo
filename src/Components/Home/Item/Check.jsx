import React from "react"
import { BsCheck } from 'react-icons/bs'

export default function Check({isCompleted}) {
        return (
            <div className={`border-2 flex justify-center items-center rounded-lg border-pink-500 w-8 min-w-2rem h-8 mr-4 ${isCompleted ? 'bg-pink-400' : ''}`}>
                {   
                    isCompleted ?
                        <BsCheck size={40} className='text-white' />
                    : ''
                }
            </div>
        )
}