import React, { Component } from "react";
import Project from "./Project";
import ItemControl from "../../components/layout/ItemControl";

class Projects extends Component {
  render() {
    return (
      <div>
        <Project />
        <ItemControl name={"Project"} />
      </div>
    );
  }
}

export default Projects;
