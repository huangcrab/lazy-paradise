import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div class="loading">
        <div class="animated infinite flash" id="box">
          X
        </div>
      </div>
    );
  }
}

export default Loading;
