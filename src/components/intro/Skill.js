import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div className="skills info-item">
        <div className="field">
          <h3>Front-End</h3>
          <ul>
            <li>React</li>
          </ul>
        </div>
        <div className="field">
          <h3>Back-End</h3>
          <ul>
            <li>Node</li>
          </ul>
        </div>
        <div className="field">
          <h3>Other</h3>
          <ul>
            <li>Swift</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Skill;
