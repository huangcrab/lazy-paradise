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
              <div className="video-overlay">
                <video
                  className="fullscreen-video"
                  src="assets/videos/demo.mp4"
                  autoPlay={true}
                  loop={true}
                />
              </div>
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
