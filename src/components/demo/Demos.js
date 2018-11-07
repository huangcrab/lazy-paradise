import React, { Component } from "react";
import Demo from "./Demo";
import ItemControl from "../../components/layout/ItemControl";
import VideoBack from "../../components/layout/VideoBackGound";
import { Consumer } from "../../context";

class Demos extends Component {
  state = {
    video: "assets/videos/demo.mp4"
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { demos, index, direction } = value;
          return (
            <section className="section demos">
              <VideoBack video={this.state.video} />

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
