const { createStore, combineReducers } = require('redux');
import * as filters from 'store/ducks/filters';
import * as todos from 'store/ducks/todos';

const reducer = combineReducers({
  filters: filters.default,
  todos: todos.default
})

// const store = createStore(reducer);
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());
// store.dispatch(todos.addTodo());
// console.log(store.getState());
// store.dispatch(filters.setFilters());
// console.log(store.getState());

export default store;





