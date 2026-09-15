function todoReducer(state, action) {
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
    default:
      return state;
  }
}

export default todoReducer;
