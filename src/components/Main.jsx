import React, { useReducer, useState } from 'react'
import Header from './Header'
import TodoCard from './TodoCard'
import reducer from '../reducer/Reducer'

function Main() {
  const [todostatus, settodoStatus] = useState('')

  const initialState={
    todolist: [],
    filterStatus: 'All'
  };

const [state,dispatch]=useReducer(reducer,initialState);
	
const statusColors = {
    Completed: 'green',
    'Not Completed': 'red',
		'All':'white'
  }

const updateTodoStatus = (status, id) => {
    dispatch({ type: 'UPDATE_TODO_STATUS', payload: { id, status } });
}

const filteredTodo = state.todolist.filter((todo) => {
    if (state.filterStatus==='All') return true;
     return todo.status===state.filterStatus;
});

return (
    <>
      <div className='main-section'>
        <Header dispatch={dispatch} todostatus={todostatus} settodoStatus={settodoStatus}/>
        <div className='main-todo'>
          <p>My ToDo's</p>
          <div className='todo-filter'>
            <p>Status: Filter:</p>
            <select value={state.filterStatus}
        			onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
        			className='cardselect'
        			style={{
          		backgroundColor: statusColors[state.filterStatus],
        			}}>
              <option value='All' className='optionall'>All</option>
              <option value='Completed' className='option-completed'>Completed</option>
              <option value='Not Completed' className='option-notcompleted'>Not Completed</option>
            </select>
          </div>
        </div>
      </div>
      {
        state.todolist.length===0?
        <h2>Welcome to Todo App!</h2> :
        <div className='tasklist'>
					{
          filteredTodo.map((task) => (
          <TodoCard 
          key={task.id} 
          task={task} 
          dispatch={dispatch}
          updateTodoStatus={updateTodoStatus} 
          />
        ))
        }
			</div>
      }
			
    </>
  )
}

export default Main
