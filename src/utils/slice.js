import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const slice = createSlice({
    name: 'Todos',
    initialState : {
        todos : [] ,
    },
    reducers : {
        addTodo : (state, action)=>{
            // const newTodo = {
            //     id: uuidv4(),
            //     text : action.payload,
            // };
            // state.todos.push(newTodo);
            state.todos.push(action.payload);

        },

        deleteTodo : (state,action) =>{
            state.todos = state.todos.filter((todo, i) => i !== action.payload)
            // state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        clearTodo : state => {
            state.todos =[];
        },

    }
})

export const {addTodo ,deleteTodo ,clearTodo} = slice.actions;
export default slice.reducer; 