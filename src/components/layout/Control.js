import React, { Component } from "react";
import { Consumer } from "../../context";

class Control extends Component {
  onProjectClick = dispatch => {
    dispatch({
      type: "SHOW_PROJECT"
    });
  };
  onDemoClick = dispatch => {
    dispatch({
      type: "SHOW_DEMO"
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
          const { dispatch } = value;
          return (
            <div>
              <a
                className="btn control-prev control-btn"
                id="prev-demo"
                onClick={this.onDemoClick.bind(this, dispatch)}
              >
                Demos
              </a>
              <a
                className="btn control-btn"
                onClick={this.onExitClick.bind(this, dispatch)}
              >
                X
              </a>
              <a
                className="btn control-next control-btn"
                id="next-demo"
                onClick={this.onProjectClick.bind(this, dispatch)}
              >
                Projects
              </a>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Control;
