import React, { Component } from "react";
import Project from "./Project";
import ItemControl from "../../components/layout/ItemControl";

class Projects extends Component {
  render() {
    return (
      <section className="section projects">
        <Project />
        <ItemControl name={"Project"} />
      </section>
    );
  }
}

export default Projects;
