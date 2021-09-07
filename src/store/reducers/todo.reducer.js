
const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    var newState = state
    switch (action.type) {
        case 'SET_TODOS':
            newState = { ...state, todos: action.todos }
            break;
        case 'ADD_TODO':
            newState = { ...state, todos: [...state.todos, action.todo] }
            break;
        case 'REMOVE_TODO':
            newState = { ...state, todos: state.todos.filter(todo => todo._id !== action.todoId) }
            break;

        default:
            return state
    }
    return newState
}
