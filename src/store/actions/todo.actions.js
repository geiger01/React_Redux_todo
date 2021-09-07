import { todoService } from "../../services/todo.service"


export const loadTodos = () => {
    return (dispatch) => {
        todoService.query()
            .then(todos => {
                dispatch({
                    type: 'SET_TODOS',
                    todos
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        return todoService.save(todo)
            .then(todo => {
                dispatch({
                    type: 'ADD_TODO',
                    todo
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteTodo = (todoId) => {
    return (dispatch) => {
        return todoService.remove(todoId)
            .then(() => {
                dispatch({
                    type: 'REMOVE_TODO',
                    todoId
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

