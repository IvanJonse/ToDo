import React, {useState, useEffect, useRef} from "react";
import CreatedTodoField from "./CreatedTodoField/CreatedTodoField";
import TodoItem from "./Item/TodoItem";
import  check2  from '../../assets/check2.png'
import  target  from '../../assets/target1.png'
import Counter from "./Counter/Counter";
import { couch } from "fontawesome";

const data = [
    {   _id: 'eyujey8uuj',
        title: 'Finish the easy collaboration',
        isCompleted: false
    },
    {   _id: 'eyu7jreyuj',
        title: 'Read next chapter of the book',
        isCompleted: false
    },
    {   _id: 'eyuj6eyuj',
        title: 'Send the finish assignment',
        isCompleted: false
    }
]

export default function Home() {

    const [todos, setTodos] = useState(data)

    const [count, setCount] = useState(0)

    const [planed, setPlaned] = useState(3)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => setTodos([...todos].filter(t => t._id !== id))

    const removeAllTodo = () => {
        setTodos([...todos].filter(t => t.isCompleted !== true))
        setCount(0)
    }


    const divRef = useRef(null)

    useEffect( () => {
       
        divRef.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "end"})
    
      })



    return (

        <div className="text-white container-snap w-full h-full mx-auto overflow-y-auto relative">

            <h1 className="text-2xl flex items-center justify-center mt-24 h-24 z-40 font-bold text-center sticky top-0 bg-gray-900">

                <Counter counter={planed} image={target}/>

                &ensp; ToDo for someone =) &ensp;

                <Counter counter={count} image={check2}/>
              
                { count > 1 ? <button className='ml-6' onClick={removeAllTodo}>Remove all</button> : ''}          

           
            </h1>

            <br/><br/>

            <div ref={divRef} className="w-4/5 h-fill flex justify-items-center items-center mx-auto flex-col">

                { todos.length === 0 ? 
                    <div className="text-4xl lg:text-3xl px-1 absolute top-1/2 flex items-center justify-items-center
                    font-bold tracking-wide mt-1/2 text-gray-800">
                        ToDo list is empty!
                    </div> 
                : 
            
                <div className="w-full z-20 h-full mt-5 pb-40 flex justify-items-center items-center mx-auto flex-col">

                    { todos.map((todo, item) => 
                    
                    <TodoItem
                        key={item}  
                        setPlaned={setPlaned} 
                        planed={planed} 
                        setCount={setCount} 
                        count={count} 
                        todo={todo} 
                        changeTodo={changeTodo} 
                        removeTodo={removeTodo}
                    />)}

                </div>     
                }
               
            </div>
           <CreatedTodoField todos={todos} setPlaned={setPlaned} planed={planed} setCount={setCount} count={count} setTodos={setTodos}/>
        </div>
    )
}