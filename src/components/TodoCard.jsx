import React, { useState } from 'react'

function TodoCard({ task,removeTodo, updateTodoStatus}) {
  const [status, setStatus] = useState('Not Completed');
  const [isEdit,setIsEdit]=useState(false);

  const statusColors = {
    'Completed': 'green',
    'Not Completed': 'red'
  }
  

  return (
    <div className='todocard'>
      <p>Id: {task.id}</p>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <select
        value={task.status}
        onChange={(e) => updateTodoStatus(e.target.value,task.id)}
        className='cardselect'
        style={{
          backgroundColor: statusColors[task.status],
        }}
      >
        <option value='Completed'>Completed</option>
        <option value='Not Completed'>Not Completed</option>
      </select>
      <div className='btn-container'>
          <button onClick={()=>setIsEdit(true)}>Edit</button>
          <button onClick={()=>removeTodo(task.id)}>Delete</button>
      </div>
     
    </div>
  )
}

export default TodoCard
