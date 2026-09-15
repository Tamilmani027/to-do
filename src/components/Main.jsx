import React, { useReducer, useState } from 'react'
import Header from './Header'
import TodoCard from './TodoCard'
import Reducer from '../reducer/Reducer'

function Main() {
  const [todolist, Settodolist] = useState([])
  const [todostatus, settodoStatus] = useState('')
  const [filterStatus, setfilterStatus]=useState('All')

  const initialState={
    todolist: [],
    filterStatus: 'All'
  };

  const [state,dispatch]=useReducer[Reducer,initialState];
	
const statusColors = {
    Completed: 'green',
    'Not Completed': 'red',
		'All':'white'
  }

const addTodo = (name,desc) => {
    Settodolist([...todolist, {id:Date.now(), name:name, description:desc, status:'Not Completed'}]);
  }

const removeTodo=(id)=>{
		Settodolist(todolist.filter((task)=>task.id!==id));
	}

const updateTodoStatus = (status, id) => {
  Settodolist(todolist.map((task) =>task.id === id ? { ...task, status: status } : task))}

const filteredTodo = todolist.filter((todo) => {
    if (filterStatus==='All') return true;
     return todo.status===filterStatus;
});

const updateEdit=(name,desc,id)=>{
  Settodolist(todolist.map((task) =>task.id === id ? { ...task, name: name, description:desc } : task))}

return (
    <>
      <div className='main-section'>
        <Header addTodo={addTodo} dispatch={dispatch} todostatus={todostatus} settodoStatus={settodoStatus}/>
        <div className='main-todo'>
          <p>My ToDo's</p>
          <div className='todo-filter'>
            <p>Status: Filter:</p>
            <select value={filterStatus}
        			onChange={(e) => setfilterStatus(e.target.value)}
        			className='cardselect'
        			style={{
          		backgroundColor: statusColors[filterStatus],
        			}}>
              <option value='All' className='optionall'>All</option>
              <option value='Completed' className='option-completed'>Completed</option>
              <option value='Not Completed' className='option-notcompleted'>Not Completed</option>
            </select>
          </div>
        </div>
      </div>
      {
        todolist.length===0?
        <h2>Welcome to Todo App!</h2> :
        <div className='tasklist'>
					{
          filteredTodo.map((task) => (
          <TodoCard 
          key={task.id} 
          task={task} 
          removeTodo={removeTodo} 
          updateTodoStatus={updateTodoStatus} 
          updateEdit={updateEdit}
          />
        ))
        }
			</div>
      }
			
    </>
  )
}

export default Main
