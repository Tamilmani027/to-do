import React, { useState } from 'react'
import Header from './Header'
import TodoCard from './TodoCard'

function Main() {
  const [todolist, Settodolist] = useState([])
	const [status, setStatus] = useState('All')
	
	const statusColors = {
    Completed: 'green',
    'Not Completed': 'red',
		'All':'white'
  }

  const addTodo = (task) => {
    Settodolist([...todolist, {id:task.id,name:task.name,description:task.description}])
  }

  return (
    <>
      <div className='main-section'>
        <Header addTodo={addTodo} />
        <div className='main-todo'>
          <p>My ToDo's</p>
          <div className='todo-filter'>
            <p>Status: Filter:</p>
            <select value={status}
        			onChange={(e) => setStatus(e.target.value)}
        			className='cardselect'
        			style={{
          		backgroundColor: statusColors[status],
        			}}>
              <option className='option'>All</option>
              <option className='option'>Completed</option>
              <option className='option'>Not Completed</option>
            </select>
          </div>
        </div>
       
      </div>
			<div className='tasklist'>
					{todolist.map((task) => (
          <TodoCard key={task.id} task={task} />
        ))}
			</div>
    </>
  )
}

export default Main
