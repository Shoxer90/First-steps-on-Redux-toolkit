import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoContainer from './components/TodoContainer';
import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice'
import React from 'react';

function App() {

const [text, setText] = useState("")

const dispatch = useDispatch()
const addTask = () => {
   dispatch(addTodo({text}))
   setText("")
}

return (
    <div className="App">
       <InputField  text = {text} addTask= {addTask} setText={setText} />
        <TodoContainer 
         />
    </div>
  );
}

export default App;
