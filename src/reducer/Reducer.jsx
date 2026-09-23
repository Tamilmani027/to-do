function reducer(state, action) {
 
  switch (action.type) {

    case 'GET_TODOS':
      return {
        ...state,
        todolist:action.payload
      }

    case 'ADD_TODO':
      return {
        ...state,
        todolist:[...state.todolist,action.payload]
      };
      
    case 'REMOVE_TODO':
      return {
          ...state,
          todolist: state.todolist.filter((task)=>task.id!==action.payload)
          };

    case 'UPDATE_TODO':
      return {
              ...state,
              todolist:state.todolist.map((task) =>task.id === action.payload.id ? { ...task, name: action.payload.name, desc:action.payload.desc } : task)
      }

    case 'UPDATE_TODO_STATUS':
      return {
        ...state,
        todolist:state.todolist.map((task) =>task.id === action.payload.id ? { ...task, status: action.payload.status } : task)
      }

    case 'SET_FILTER':
      return {
        ...state,
        filterStatus:action.payload
      }

    default:
      return state;
  }
}

export default reducer;



