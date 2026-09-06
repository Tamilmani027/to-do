import React, { useState } from 'react'

function TodoCard({ task }) {
  const [status, setStatus] = useState('Not Completed')

`  const statusColors = {
    Completed: 'green',
    'Not Completed': 'red'
  }`

  return (
    <div className='todocard'>
      <p>Id: {task.id}</p>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className='cardselect'
        style={{
          backgroundColor: statusColors[status],
        }}
      >
        <option>Completed</option>
        <option>Not Completed</option>
      </select>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default TodoCard
