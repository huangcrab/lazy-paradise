import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
  render() {
    const { pathname } = this.props.path;

    const target = {
      name: "",
      path: ""
    };
    switch (pathname) {
      case "/intro":
        target.name = "Home";
        target.path = "/";
        break;
      case "/":
        target.name = "About Me";
        target.path = "/intro";
        break;
      default:
        break;
    }
    return (
      <ul className="control">
        <li>
          <Link to="/demos" onClick={this.onDemoClick}>
            Demos
          </Link>
        </li>
        <li>
          <Link to={target.path} className="btn control-btn">
            {target.name}
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={this.onProjectClick}>
            Projects
          </Link>
        </li>
      </ul>
    );
  }
}

export default Control;
