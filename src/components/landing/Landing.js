import React, { Component } from "react";
import Control from "../../components/layout/Control";
import VideoBack from "../../components/layout/VideoBackGound";

import Scene from "../Test/Scene";

class Landing extends Component {
  state = {
    video: "assets/videos/video.mp4"
  };
  render() {
    return (
      <section className="section landing">
        <VideoBack video={this.state.video} />
        <div className="item-container">
          <div className="item main">
            {/* <img src="assets/x_blue.png" alt="X" /> */}
            <Scene />
            <h1 className="gradient1">Welcome to "Lazy Paradise"</h1>
            <p>
              <span>Work Hard, Think Hard, So you can be lazy</span>
            </p>
            <p>
              "Laziness" can be a key of future development, the "Laziness" here
              does not mean the quality of being unwilling to work or use
              energy, the "Laziness" here simply means being
              <strong> creative </strong>
              to facilitate people’s life!
            </p>
          </div>
        </div>
        <Control path={this.props.location} />
      </section>
    );
  }
}

export default Landing;
