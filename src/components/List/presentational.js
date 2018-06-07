import React, { PureComponent }  from "react";
import { PropTypes } from 'prop-types';

class List extends PureComponent {

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
      <section>
        <ul>
            {this.props.values.lenght ?
            <li><i>Nothing todo</i></li> :
              this.props.values.filter(value => {
                switch (this.props.filter) {
                  case "SHOW_ALL":
                    return true;
                  case "SHOW_COMPLETED":
                    return value.done;
                  case "SHOW_PENDING":
                    return !value.done;
                  default:
                    return true;
                }
              })
              .map((filteredValue) => (
                <li key={filteredValue.uuid}>
                  {filteredValue.done ? `✔️` : `⭕️`}
                  <b>{filteredValue.label}</b>
                  <button uuid={filteredValue.uuid} onClick={() => this.handleClick(filteredValue)}>
                    {filteredValue.done ? `Undo` : `Done`}
                  </button>
                  <br/><i>{filteredValue.description}</i>
                </li>
            ))}
        </ul>
      </section>
    )
  }
}

List.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string
  })),
  onClick: PropTypes.func.isRequired
}

export default List;