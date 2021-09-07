import React, { useState } from "react"
import { TodoPreview } from "./todo-preview"




export const TodoList = ({ todos, onDeleteTodo }) => {

    return (
        <div className="todo-list" >
            {todos.map((todo, idx) => <TodoPreview key={idx} todo={todo} onDeleteTodo={onDeleteTodo} />)}
        </div >
    )

}



