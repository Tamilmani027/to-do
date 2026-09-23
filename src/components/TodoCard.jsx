import React, { useState } from 'react'

function TodoCard({ task,dispatch, updateTodoStatus, deleteTodo,updateTodo}) {
  const [status, setStatus] = useState('Not Completed');
  const [isEdit,setIsEdit]=useState(false);
  const [name,setName]=useState(task.name);
  const [desc,setDesc]=useState(task.desc);

  const statusColors = {
    'Completed': 'green',
    'Not Completed': 'red'
  }

  const HandleEdit=(name, desc, id)=>{
    updateTodo(name, desc, id)
    setIsEdit(false)
  }
  
  return (
    <div className='todocard'>
      
        {
            isEdit ?(
            <>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            </>
            )
            :
            <>
            <p>Name: {task.name}</p>
            <p>Description: {task.desc}</p>
            </>
}
        
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
        {
          isEdit ?
          <button onClick={()=>HandleEdit(name, desc, task.id)}>Update</button> : <button onClick={()=>setIsEdit(true)}>Edit</button>
        }
          <button onClick={()=>deleteTodo(task.id)}>Delete</button>
      </div>
            
     
    </div>
  )
}

export default TodoCard

