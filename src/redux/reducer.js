const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'A', complete: false, priority: 'Medium'},
        {id: 2, name: 'B', complete: true, priority: 'High'},
        {id: 3, name: 'C', complete: false, priority: 'Low'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({state, action});
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {...state.filters, search: action.payload}
            }
        default:
            return state;
    }
}

export default rootReducer;