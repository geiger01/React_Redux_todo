import { todoReducer } from "./reducers/todo.reducer";
import { userReducer } from "./reducers/user.reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todoModule: todoReducer,
    userModule: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))