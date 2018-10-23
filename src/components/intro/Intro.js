import React, { Component } from "react";
import Control from "../../components/layout/Control";

class Intro extends Component {
  render() {
    return (
      <div className="section about">
        <div className="item-container">
          <div className="item">
            <h1>About Me</h1>
            <a
              href="https://github.com/huangcrab"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="about-icon fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/xie-huang-a2b3baa2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="about-icon fab fa-linkedin" />
            </a>
            <a href="mailto:seanhuang129@gmail.com">
              <i className="about-icon fa fa-envelope" />
            </a>
            <p>
              I am an extreme fast-learner who is able to work under pressure to
              deliver desired results within allocated time frame. Highly
              skilled in software problems diagnosis and effective solutions
              development. Able to communicate proficiently, and comfortable
              working in diversified environments. While thriving in challenging
              environments, I bring an exceptional set of skills guided by
              strong work ethics.
            </p>
          </div>
        </div>
        <Control path={this.props.location} />
      </div>
    );
  }
}

export default Intro;
