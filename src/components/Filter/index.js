import { connect } from 'react-redux';
import { setFilters } from 'store/ducks/filters';
import Filter from "./presentational";

const mapStateToProps = (state) => ({
  values: state.filters.values,
  active: state.filters.active,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter) => dispatch(setFilters(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);