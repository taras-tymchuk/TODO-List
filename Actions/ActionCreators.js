import { ADD_TASK, SET_DONE, DELETE_TASK } from 'ToDoProject/Actions/ActionTypes'

export function addTask(text) {
    return {
        type: ADD_TASK,
        payload: {
            text
        }
    }
}

export function setTaskDone(index) {
    return {
        type: SET_DONE,
        payload: {
            index
        }
    }
}

export function deleteTask(index) {
    return {
        type: DELETE_TASK,
        payload: {
            index
        }
    }
}
