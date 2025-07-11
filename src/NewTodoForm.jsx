import React from 'react'
import { useState } from 'react'
export default function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("")
    const handleSubmit = (event)=>{
    event.preventDefault()
    if (newItem === "")return
    addTodo(newItem)
    setNewItem("")
  }
  return (
     <form className="new-item-form" onSubmit = {handleSubmit}>
      <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input  type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
