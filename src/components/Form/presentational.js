import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class Form extends PureComponent {

constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);

  this.state = {
    value: ""
  }
}

handleChange(event) {
  // console.log(event.target);
  this.setState({
    value: event.target.value
  });

  event.preventDefault();
  // console.log(event.target);
}

handleSubmit(event) {
  event.preventDefault();
  this.props.onSubmit(
    document.querySelector('input[name="label"]').value,
    document.querySelector('textarea[name="description"]').value
  );
  // console.log(event.target);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task *
        <br/><input type="text" name="label" /></label>
        <br/><label>Description
        <br/><textarea type="text" name="description" /></label>
        <br/><button type="submit">➕</button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form;