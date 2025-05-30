import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {
    const[input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        if (input.trim() === '') return;
        dispatch(addTodo(input))
        setInput('')       //for clean the input
    }

  return (
   <form onSubmit={addTodoHandler} className='space-x-3 mt-12 flex justify-center'>

    <input type="text" placeholder='Enter a Todo...' value={input} onChange={(e)=>setInput(e.target.value)}
    className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-offset-indigo-900 
    text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>

    <button type='submit' className='text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none
    hover:bg-indigo-600 rounded text-lg'>Add Todo</button>
   </form>
  )
}

export default AddTodo
