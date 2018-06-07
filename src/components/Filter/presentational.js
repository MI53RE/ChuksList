import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class Filter extends PureComponent {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    }
  }

  handleChange(event) {
    const el = event.target;
    this.setState({
      value: el.value
    });
    this.props.onChange(
      el.value
    );
    // console.log(el.value);
  }

  render() {
    return (
      <div>
        {this.props.values.map((value, index) => (
          <label key={index}>
            {value.split('_')
              .map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
              .join(' ')}
            <input onChange={this.handleChange} type="radio" name="filter" value={value} checked={value === this.props.active} /><br/>
          </label>  
        ))}
      </div>
    )
  }
}

Filter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Filter;
