import React from 'react'
import TodoField from './TodoField';
import { useSelector } from 'react-redux';

export default function TodoContainer({removeTodo,checkTodo}) {

const todos = useSelector(state => state.todos.todos)

  return (
    <div>
        {
            todos && todos.map(todo => {
               return <div  key={todo.id} >
                    <TodoField 
                        {...todo}
                        removeTodo = {removeTodo}
                        checkTodo = {checkTodo}
                      />
                 </div>
            })
        }
    </div>
  )
}
