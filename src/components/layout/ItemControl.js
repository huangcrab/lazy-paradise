import React, { Component } from "react";

class ItemControl extends Component {
  onNextClick = () => {
    this.props.next();
  };
  onPrevClick = () => {
    this.props.prev();
  };
  onExitClick = () => {
    this.props.exit();
  };
  render() {
    const { name } = this.props;
    return (
      <div>
        <a
          className="btn control-prev control-btn"
          id="prev-demo"
          onClick={this.onPrevClick}
        >
          Prev {name}
        </a>
        <a
          className="btn control-btn"
          id="close-demo"
          onClick={this.onExitClick}
        >
          X
        </a>
        <a
          className="btn control-next control-btn"
          id="next-demo"
          onClick={this.onNextClick}
        >
          Next {name}
        </a>
      </div>
    );
  }
}

export default ItemControl;
