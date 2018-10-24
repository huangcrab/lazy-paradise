import React, { Component } from "react";

class About extends Component {
  state = {
    content: 0
  };
  render() {
    return (
      <div className="about-me info-item">
        <p>
          I am an extreme fast-learner who is able to work under pressure to
          deliver desired results within allocated time frame. Highly skilled in
          software problems diagnosis and effective solutions development. Able
          to communicate proficiently, and comfortable working in diversified
          environments. While thriving in challenging environments, I bring an
          exceptional set of skills guided by strong work ethics.
        </p>
      </div>
    );
  }
}

export default About;
