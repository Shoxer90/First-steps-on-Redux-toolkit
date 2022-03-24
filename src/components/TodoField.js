import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, checkTodo } from '../store/todoSlice'

export default function TodoField({text,id,completed}) {
  const dispatch = useDispatch()

  return (
      <div className='toDoItem'>
           <input type='checkbox' checked={completed}
             onChange={() => dispatch(checkTodo({id}))}
              />
           <span>
               {text}  
            </span> 
            <button onClick = {() => dispatch(removeTodo({id}))} >
                X
            </button> 
       
   </div>
     )
}
