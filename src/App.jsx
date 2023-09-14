import React, { useState } from 'react'

export default function () {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTodos((currenttodos) => {

      const t = [...currenttodos, { id: crypto.randomUUID(), title: newItem, completed: false }]

      return t

    }
    )
    setNewItem("")
    console.log(todos)
  }
  function toggleTodos(id,completed){
    setTodos((currenttodos)=>{
      return currenttodos.map(todo=>{
        if(todo.id==id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }
  function deletetodo(id){
    setTodos((currenttodo)=>{
      return currenttodo.filter(todo=> todo.id!=id)
    })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>New Item</label>
        <input type="text"
          id="item"
          onChange={(e) => {
            setNewItem(e.target.value)
            console.log(newItem)
          }

          }
          value={newItem}
        >

        </input>
        <br />
        <button  >Add</button>

      </form>
      <h1> Todo List</h1>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input onChange={e => { toggleTodos(todo.id, e.target.checked) }} type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button onClick={()=>deletetodo(todo.id)}>Delete</button>
            </li>
          )
        })}

      </ul>


    </>
  )
}
