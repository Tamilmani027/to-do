import React, { useReducer, useState,useEffect } from 'react'
import Header from './Header'
import TodoCard from './TodoCard'
import reducer from '../reducer/Reducer'
import axios from 'axios'

const api=axios.create({baseURL:"https://6a6457acb30b52361e1ae72c.mockapi.io"});

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

const updateTodoStatus = async(status, id) => {
  try{
    dispatch({ type: 'UPDATE_TODO_STATUS', payload: { id, status } });
    await api.put(`/todos/${id}`, {status:status,id:id});
  }
  catch (error){
    console.log(error)
  }
}

const filteredTodo = state.todolist.filter((todo) => {
    if (state.filterStatus==='All') return true;
     return todo.status===state.filterStatus;
});

const getData=async() => {
  try{
      const response=await api.get('/todos');
      const data=response.data;

      dispatch({type:"GET_TODOS", payload:data});

      }
    catch (error){
      console.error("Error fetching todos...");
    }
  }  

const addTodo=async(name,desc)=>{
  try{
      const response=await api.post('/todos',{name:name,desc:desc,status:'Not Completed'});
      dispatch({ type:'ADD_TODO', payload:response.data});
  }
  catch (error){
      console.error("Error creating post:",error);
  }
}

const updateTodo=async(name,desc,id)=>{
  try{
    dispatch({type:'UPDATE_TODO', payload:{name:name,desc:desc,id:id}})
    await api.put(`/todos/${id}`, {name:name, desc:desc, id:id});
    }
    catch (error){
    console.log(error)
  }
  }
  
const deleteTodo = async (id) => {
  try {
    dispatch({ type: "REMOVE_TODO", payload: id });
    await api.delete(`/todos/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};


useEffect(()=>{
      getData();
},[]);

return (
    <>
      <div className='main-section'>
        <Header dispatch={dispatch} todostatus={todostatus} settodoStatus={settodoStatus} addTodo={addTodo} />
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
          updateTodo={updateTodo}
          key={task.id} 
          task={task} 
          dispatch={dispatch}
          updateTodoStatus={updateTodoStatus} 
          deleteTodo={deleteTodo}
          />
        ))
        }
			</div>
      }
			
    </>
  );
}

export default Main
