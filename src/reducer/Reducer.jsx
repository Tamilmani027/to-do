function reducer(state, action) {
 
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todolist: [
          ...state.todolist,
          {
            id: Date.now(),
            name: action.payload.name,
            description: action.payload.desc,
            status: 'Not Completed'
          }
        ]
      };
      
    case 'REMOVE_TODO':
      return {
          ...state,
          todolist: state.todolist.filter((task)=>task.id!==action.payload)
          };

    case 'UPDATE_TODO':
      return {
              ...state,
              todolist:state.todolist.map((task) =>task.id === action.payload.id ? { ...task, name: action.payload.name, description:action.payload.desc } : task)
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



