import React, { PureComponent }  from "react";
import { PropTypes } from 'prop-types';

class Item extends PureComponent {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: ""
    }
  }

  handleClick(value) {
    this.props.onClick(
      value
    );
  }
  
  render() {
    return (
      <li key={value.uuid}>
        {value.done ? `✔️` : `⭕️`}
        <b>{value.label}</b>
        <button onClick={() => this.handleClick(value)}>
          {value.done ? `Undo` : `Done`}
        </button>
        <br/><i>{value.description}</i>
      </li>
    )
  }
}

Item.propTypes = {
  value: PropTypes.shape({
    done: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
}

export default Item;