import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "./todoSlice";

 export default configureStore({
     reducer:{
         todos: todoReducer,
        //  user:userReducer  if app have any reducers
     }
 })