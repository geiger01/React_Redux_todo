import React from "react"
import { Link } from "react-router-dom"

export const TodoPreview = ({ todo, onDeleteTodo }) => {
    return (
        <React.Fragment>

            <div className="todo-preview">
                <Link to={`/edit/${todo._id}`}>
                    <h2>{todo.txt}</h2>
                    <p>{todo.label}</p>
                </Link>
                <div onClick={() => onDeleteTodo(todo._id)} className="delete-todo-btn">✖</div>
            </div>
        </React.Fragment >
    )
}