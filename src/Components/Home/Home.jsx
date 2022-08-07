import React, {useState, useEffect, useRef} from "react";
import CreatedTodoField from "./CreatedTodoField/CreatedTodoField";
import TodoItem from "./Item/TodoItem";
import  check2  from '../../assets/check2.png'
import  target  from '../../assets/target1.png'
import Counter from "./Counter/Counter";

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

    const RemoveAllTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        if(current.isCompleted === true) {
            return <></>
        }
    }

    const divRef = useRef(null)

    const btn = useRef(null)

    useEffect( () => {
        changeTodo &&
        divRef.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "end"})
    
      })

      const scrollToTop = () => {
        btn.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "start"});
      };

    return (
        <div className="text-white container-snap w-full h-full mx-auto overflow-y-auto relative">
                <div ref={btn}></div>
            <h1 className="text-2xl font-bold text-center mb-16 sticky top-0 bg-gray-900 pb-5 mt-24 pt-6 xl:mt-16 xl:pt-5">
                ToDo for someone =)
                { todos.map(todo => RemoveAllTodo(todo._id)  )}
                
            </h1>
                <div className="text-3xl fixed xl:sticky top-0/5 left-0 text-center block pl-8 px-5 xl:px-0 xl:right-0 xl:mx-auto xl:flex xl:justify-between xl:w-full xl:top-5">
                   <Counter counter={count} image={check2}/>
                   <Counter counter={planed} image={target}/>
                </div>
            <div ref={divRef} className="w-4/5 h-fill flex justify-items-center items-center mx-auto flex-col">
                { todos.length === 0 ? 
                    <div className="text-4xl lg:text-3xl px-1 absolute top-1/2 flex items-center justify-items-center
                    font-bold tracking-wide mt-1/2 text-gray-800">
                        ToDo list is empty!
                    </div> 
                : 
            
                <div className="w-full h-full pb-40 flex justify-items-center items-center mx-auto flex-col">
                    {

                    todos.map(todo => <TodoItem key={todo._id} setPlaned={setPlaned} planed={planed} setCount={setCount} count={count} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
                    
                    )}
                </div>     
                }
               
                {/* {todos.length > 4 ? <button onClick={scrollToTop} className="border-none outline-none p-10 bg-green-500 text-white flex justify-center w-4 mx-auto text-center fixed bottom-6 right-12 z-30">ToTop</button> : ''} */}

            </div>
           <CreatedTodoField todos={todos} setPlaned={setPlaned} planed={planed} setCount={setCount} count={count} setTodos={setTodos}/>
        </div>
    )
}