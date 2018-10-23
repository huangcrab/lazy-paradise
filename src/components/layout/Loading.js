import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="animated infinite flash" id="box">
          X
        </div>
      </div>
    );
  }
}

export default Loading;
