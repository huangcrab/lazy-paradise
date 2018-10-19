import React, { Component } from "react";
import { Consumer } from "../../context";

class ItemControl extends Component {
  onNextClick = dispatch => {
    dispatch({
      type: "NEXT_ITEM"
    });
  };
  onPrevClick = dispatch => {
    dispatch({
      type: "PREV_ITEM"
    });
  };
  onExitClick = dispatch => {
    dispatch({
      type: "MAIN_PAGE"
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { name, dispatch } = value;
          return (
            <ul className="control">
              <li>
                <a
                  className="btn control-prev control-btn"
                  id="prev-demo"
                  onClick={this.onPrevClick.bind(this, dispatch)}
                >
                  Prev {name}
                </a>
              </li>
              <li>
                <a
                  className="btn control-btn"
                  id="close-demo"
                  onClick={this.onExitClick.bind(this, dispatch)}
                >
                  X
                </a>
              </li>
              <li>
                <a
                  className="btn control-next control-btn"
                  id="next-demo"
                  onClick={this.onNextClick.bind(this, dispatch)}
                >
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

export default ItemControl;
