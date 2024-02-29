import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems';

let count = 0;
const Todo = () => {
 
    //Input function
      const [todos,setTodos] = useState([]);
      const inputRef = useRef(null);
    //Add button function saving text from the input field
    const add = () => {
        setTodos([...todos,{no:count++, text:inputRef.current.value,display:""}]);
        //Clear input field data
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count)
    }
    //Obtain data from local storage and store it user variable
        useEffect(()=>{
                setTodos(JSON.parse(localStorage.getItem("todos")))
                count = localStorage.getItem("todos_count");
        },[])
    // Display todos in console and save in local storage 
        useEffect(()=>{
            setTimeout(()=>{
                console.log(todos);
                localStorage.setItem("todos",JSON.stringify(todos))
            },100);
         },[todos])

    return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
         <input ref={inputRef} type='text' placeholder='Add your task' className='todo-input' />
         <div onClick={()=>{add()}} className='todo-add-btn'>ADD</div>
      </div>
      <div className='todo-list'>
        {todos.map((item,index)=>{
            return <TodoItems key={index} no={item.no} display= {item.display} text={item.text}/>
      })}
      
      </div>      
    </div>
  )
}

export default Todo
