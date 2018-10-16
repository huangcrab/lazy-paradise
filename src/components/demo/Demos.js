import React, { Component } from "react";
import Demo from "./Demo";
import ItemControl from "../../components/layout/ItemControl";

class Demos extends Component {
  render() {
    return (
      <div>
        <Demo />
        <ItemControl name={"Demo"} />
      </div>
    );
  }
}

export default Demos;
