import { ADD_TASK, SET_DONE, DELETE_TASK } from 'ToDoProject/Actions/ActionTypes';

const initialState = {
    tasks: [
        {
            text: 'first',
            isDone: false,
        },
        {
            text: 'second',
            isDone: false,
        }]
};

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DONE: {
            let tasks = state.tasks.map((task, index) => {
                if (index == action.payload.index) {
                    return {
                        ...task,
                        isDone: !task.isDone,
                    }
                }
                else {
                    return state.tasks[index];
                }
            })

            return { ...state, tasks };
        }

        case ADD_TASK: {
            let tasks = [...state.tasks, { text: action.payload.text, isDone: false }];

            return { ...state, tasks };
        }

        case DELETE_TASK: {
            let tasks = state.tasks;
            tasks.splice(action.payload.index, 1);

            return { ...state, tasks };
        }

        default: {
            return state;
        }
    }
}
