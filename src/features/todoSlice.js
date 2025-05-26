import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        editTodo:(state, action)=>{
            const{id, newtext} = action.payload
            const todo = state.find(todo => todo.id === id)
            if(todo){
                todo.text = newtext
            }
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export const{addTodo, editTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer