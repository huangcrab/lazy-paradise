import React, { Component } from "react";
import Loading from "./Loading";

export default class VideoBackGound extends Component {
  state = {
    loaded: false
  };
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.videoRef.addEventListener("loadedmetadata", () => {
      console.log(this.videoRef.readyState);
      this.setState({
        loaded: true
      });
    });
  }
  render() {
    const { video } = this.props;
    return (
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
        {}
      </div>
    );
  }
}
