import React, { Component } from "react";
import Project from "./Project";
import ItemControl from "../../components/layout/ItemControl";
import { Consumer } from "../../context";

class Projects extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { projects, index, direction } = value;
          return (
            <section className="section projects">
              <div className="video-overlay">
                <video
                  className="fullscreen-video"
                  src="assets/videos/project.mp4"
                  autoPlay={true}
                  loop={true}
                />
              </div>

              <Project
                items={projects}
                index={index}
                direction={direction}
                transRef={this.transition}
              />
              <ItemControl length={projects.length} name={"Project"} />
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Projects;
