import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEdit = (id, currentText) => {
    setEditId(id)
    setEditText(currentText)
  }

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newtext: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  return (
    <div className="flex justify-center mt-2">
      <ul className="w-full max-w-3xl">
        {todos.map((todo) => (
          <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            {editId === todo.id ? (
              <input type="text"className="text-white px-2 py-1 rounded w-full mr-2"value={editText}onChange={(e) => setEditText(e.target.value)}/>
            ) : (
              <div className="text-white w-full">{todo.text}</div>
            )}

            <div className="flex gap-2 ml-4">
              {editId === todo.id ? (
                <button className="text-white bg-green-500 py-1 px-3 rounded hover:bg-green-600" onClick={() => handleSave(todo.id)}>Save</button>
              ) : (
                <button className="text-white bg-blue-500 py-1 px-3 rounded hover:bg-blue-600"onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              )}
              <button className="text-white bg-red-500 py-1 px-3 rounded hover:bg-red-600" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
