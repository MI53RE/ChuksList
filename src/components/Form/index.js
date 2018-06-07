import { connect } from 'react-redux';
import { addTodo } from 'store/ducks/todos';
import Form from "./presentational";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (label, description) => dispatch(addTodo(label, description))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);