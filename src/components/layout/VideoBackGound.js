import React, { Component } from "react";
import Loading from "./Loading";

export default class VideoBackGound extends Component {
  state = {
    loaded: false,
    mobile: false
  };
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    if (window.innerWidth < 450) {
      this.setState({
        loaded: true,
        mobile: true
      });
    } else {
      this.videoRef.addEventListener("loadedmetadata", () => {
        this.setState({
          loaded: true
        });
      });
    }
  }
  render() {
    const { video } = this.props;
    return this.state.mobile ? null : (
      <div className="video-overlay">
        {this.state.loaded ? null : <Loading />}
        <video
          ref={elem => (this.videoRef = elem)}
          className="fullscreen-video"
          src={video}
          autoPlay
          loop
          type="video/mp4"
          muted
        />
      </div>
    );
  }
}
