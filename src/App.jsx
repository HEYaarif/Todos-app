import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-slate-700'>
      <h2 className='font-bold text-shadow-blue-600 text-5xl text-center text-white pt-6'>Todo Application</h2>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
