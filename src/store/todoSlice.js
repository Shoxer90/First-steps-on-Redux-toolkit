import { createSlice } from "@reduxjs/toolkit";
 
const todoSlice = createSlice({
    name:'todos',
    initialState: {
        todos:[],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text:action.payload.text,
                completed: false,
              })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(item =>{ 
               return item.id !== action.payload.id
            })
        },
        checkTodo(state, action) {
            const toggleComplete = state.todos.find(item => item.id === action.payload.id)
            toggleComplete.completed = !toggleComplete.completed
                },
        },
 
})
 export const { addTodo, removeTodo, checkTodo}= todoSlice.actions;
 export default todoSlice.reducer;