
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'todo'
const listeners = []

export const todoService = {
    query,
    getById,
    save,
    remove,
    subscribe

}
window.cs = todoService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}

function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}

function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        todo.owner = 'me'
        return storageService.post(STORAGE_KEY, todo)
    }
}



function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscriberstodosChanged(todos) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(todos))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(todos => {
            _notifySubscriberstodosChanged(todos)
        })
})



