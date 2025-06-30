import React from 'react'

function TodoItem({completed,id,title,key,toggleTodo,handleDelete}) {
  return (
   <li key={key}>
        <label>
          <input type="checkbox" checked={completed} onChange = {e=>toggleTodo(id, e.target.checked)}/>
              {title}
        </label>
        <button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button>
      </li>
  )
}

export default TodoItem