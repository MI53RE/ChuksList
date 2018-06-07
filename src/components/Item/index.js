import { connect } from 'react-redux';
import { setTodo } from 'store/ducks/todos';
import Item from "./presentational";

const mapStateToProps = (state) => {
  console.log(state)
  return {
    values: state.todos.values,
    filter: state.filters.active
  }
};
const mapDispatchToProps = (dispatch) => ({
  onClick: (todo) => dispatch(setTodo(todo.uuid, {
    done: !todo.done
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);