import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/"> All Todos</Link>
            <Link to="/edit">Add todo</Link>
        </nav>
    )
}
