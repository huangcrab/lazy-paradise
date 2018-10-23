import React, { Component } from "react";
import { Consumer } from "../../context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ItemControl extends Component {
  onNextClick = (dispatch, length) => {
    dispatch({
      type: "NEXT_ITEM",
      payload: length
    });
  };
  onPrevClick = (dispatch, length) => {
    dispatch({
      type: "PREV_ITEM",
      payload: length
    });
  };
  onExitClick = dispatch => {
    dispatch({
      type: "CLEAR_INDEX"
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { name, length } = this.props;
          return (
            <ul className="control">
              <li>
                <a onClick={this.onPrevClick.bind(this, dispatch, length)}>
                  Prev {name}
                </a>
              </li>

              <li>
                <Link to="/" onClick={this.onExitClick.bind(this, dispatch)}>
                  X
                </Link>
              </li>
              <li>
                <a onClick={this.onNextClick.bind(this, dispatch, length)}>
                  Next {name}
                </a>
              </li>
            </ul>
          );
        }}
      </Consumer>
    );
  }
}

ItemControl.propTypes = {
  name: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default ItemControl;
