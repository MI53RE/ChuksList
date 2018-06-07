import uuid from 'uuid'

// Actions

export const ADD_TODO = 'my-todo/TODOS/ADD_TODO';
export const SET_TODO = 'my-todo/TODOS/SET_TODO';

// Initial

const initial = {
  values: [
    // {
    //   uuid: uuid(),
    //   label: 'Finish TODO LIST',
    //   description: 'Complete the current program then proceed to next task.',
    //   done: false
    // },
    // {
    //   uuid: uuid(),
    //   label: 'Finish TODO LIST',
    //   description: 'Complete the current program then proceed to next task.',
    //   done: true
    // }
    ],
    page: 0
};


export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        values: state.values.concat(action.todo)
      };
    case SET_TODO:
    console.log(action)
      return {
        ...state,
        values: state.values.map(value => value.uuid === action.todo.uuid ? {...value, ...action.todo.changes} : value)
      };
    default:
      return state;
  }
}

// Actions creator 

export const addTodo = (label = '', description = '') => ({
  type: ADD_TODO,
  todo: {
    uuid: uuid(),
    label: label,
    description: description,
    done: false
  }
});

export const setTodo = (uuid = '', changes = {}) => ({
  type: SET_TODO,
  todo: {
    uuid: uuid,
    changes: changes
  }
});