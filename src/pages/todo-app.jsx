import React from "react"
import { connect } from "react-redux";
import { TodoList } from "../cmps/todo-list";
import { addTodo, loadTodos, deleteTodo } from "../store/actions/todo.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//HOOKS SOLUTION

export const TodoApp = () => {

    const todos = useSelector(state => state.todoModule.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const onDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    return (
        <main className="todo-app">
            {todos.length && <TodoList todos={todos} onDeleteTodo={onDeleteTodo} /> || ''}
        </main>
    )
}

//CLASS SOLUTION


// export class _TodoApp extends React.Component {

//     componentDidMount() {
//         this.props.loadTodos()
//     }

//     onDeleteTodo = (todoId) => {
//         this.props.deleteTodo(todoId)
//     }

//     render() {
//         const { todos } = this.props
//         return (
//             <main className="todo-app">
//                 {todos.length && <TodoList todos={todos} onDeleteTodo={this.onDeleteTodo} /> || ''}
//             </main>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         todos: state.todoModule.todos
//     }
// }

// const mapDispatchToProps = {
//     addTodo,
//     loadTodos,
//     deleteTodo
// }

// export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(_TodoApp)

