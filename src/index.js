import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from 'components/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#mount')
);

// const { createStore, combineReducers } = require('redux');
// import * as filters from './store/ducks/filters';
// import * as todos from './store/ducks/todos';

// const reducer = combineReducers({
//   todos: todos.default,
//   filters: filters.default
// })

// const store = createStore(reducer);

// console.log(store.getState());
// store.dispatch(todos.addTodo());
// console.log(store.getState());
// store.dispatch(filters.setFilters());
// console.log(store.getState());


