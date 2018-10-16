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
  onExitClick = () => {
    this.props.exit();
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { name, dispatch } = value;
          return (
            <div>
              <a
                className="btn control-prev control-btn"
                id="prev-demo"
                onClick={this.onPrevClick.bind(this, dispatch)}
              >
                Prev {name}
              </a>
              <a className="btn control-btn" id="close-demo">
                X
              </a>
              <a
                className="btn control-next control-btn"
                id="next-demo"
                onClick={this.onNextClick.bind(this, dispatch)}
              >
                Next {name}
              </a>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ItemControl;
