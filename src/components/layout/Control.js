import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

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
          <Link
            to="/demos"
            className="btn control-prev control-btn"
            id="prev-demo"
            onClick={this.onDemoClick}
          >
            Demos
          </Link>
        </li>
        <li>
          <Link to={target.path} className="btn control-btn">
            {target.name}
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="btn control-next control-btn"
            id="next-demo"
            onClick={this.onProjectClick}
          >
            Projects
          </Link>
        </li>
      </ul>
    );
  }
}

export default Control;
