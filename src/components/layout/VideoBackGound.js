import React, { Component } from "react";

export default class VideoBackGound extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="video-overlay">
        <video
          ref="videoRef"
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
