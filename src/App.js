import React from "react";
import { TodoApp } from "./pages/todo-app";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './style/main.css'
import { TodoEdit } from "./pages/todo-edit";
import { Header } from "./cmps/header";

export const App = () => {

    return (
        <Router>
            <Header />
            <div className="app">
                <Switch>
                    <Route exact path="/edit/:todoId?" component={TodoEdit} />
                    <Route exact path="/" component={TodoApp} />
                </Switch>
            </div>
        </Router>
    )
}