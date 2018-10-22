import React, { Component } from "react";
import Demo from "./Demo";
import ItemControl from "../../components/layout/ItemControl";
import { Consumer } from "../../context";

class Demos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { demos, index, direction } = value;
          return (
            <section className="section demos">
              <Demo items={demos} index={index} direction={direction} />
              <ItemControl name={"Demo"} length={demos.length} />
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Demos;
