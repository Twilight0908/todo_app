/*
export const addTodoAction={
    type:'todoList/addTodo',
    payload:{}
}*/

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}