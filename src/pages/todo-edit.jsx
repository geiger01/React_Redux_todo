import React, { Component } from 'react'
import { addTodo } from '../store/actions/todo.actions';
import { connect } from 'react-redux';
import { todoService } from '../services/todo.service';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';


//HOOKS SOLUTION
export const TodoEdit = () => {

    const [todo, setTodo] = useState({
        txt: '',
        label: '',
    })

    let history = useHistory()
    const dispatch = useDispatch()
    const { todoId } = useParams()

    useEffect(() => {
        if (todoId) {
            todoService.getById(todoId)
                .then(todo => {
                    console.log(todo);
                    if (todo) setTodo(todo)
                })
        }
    }, [])

    const onHandleChange = (ev) => {
        const { name, value } = ev.target;
        setTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onAddTodo = () => {

        if (todo.txt && todo.label) {
            dispatch(addTodo(todo))
                .then(() => {
                    history.push('/')
                })
        }
    }

    return (
        <div className="todo-list" >
            <input name="txt" onChange={onHandleChange} value={todo.txt} type="text" placeholder="Add todo..." />
            <input name="label" onChange={onHandleChange} value={todo.label} type="text" placeholder="Add label..." />
            <button onClick={onAddTodo} className="add-todo-btn">+</button>
        </div >
    )
}

//CLASS SOLUTION

// export class _TodoEdit extends Component {

//     state = {
//         todo: {
//             txt: '',
//             label: '',
//         }
//     }

//     componentDidMount() {
//         const { todoId } = this.props.match.params
//         if (todoId) {
//             todoService.getById(todoId)
//                 .then(todo => {
//                     if (todo) this.setState({ todo })
//                 })
//         }
//     }

//     onHandleChange = (ev) => {
//         const { name, value } = ev.target;
//         this.setState({
//             todo: {
//                 ...this.state.todo,
//                 [name]: value
//             }
//         });
//     }

//     onAddTodo = () => {
//         this.props.addTodo(this.state.todo)
//             .then(() => {
//                 this.props.history.push('/')
//             })
//     }

//     render() {
//         const { todo } = this.state
//         return (
//             <div className="todo-list" >
//                 <input name="txt" onChange={this.onHandleChange} value={todo.txt} type="text" placeholder="Add todo..." />
//                 <input name="label" onChange={this.onHandleChange} value={todo.label} type="text" placeholder="Add label..." />
//                 <button onClick={this.onAddTodo} className="add-todo-btn">+</button>
//             </div >
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {

//     }
// }

// const mapDispatchToProps = {
//     addTodo,
// }

// export const TodoEdit = connect(mapStateToProps, mapDispatchToProps)(_TodoEdit)

