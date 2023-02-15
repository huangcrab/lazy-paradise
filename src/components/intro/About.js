import React, { Component } from 'react';

class About extends Component {
  state = {
    content: 0,
  };
  render() {
    return (
      <div className="about-me info-item">
        <p>{this.props.intro || `Loading...`}</p>
      </div>
    );
  }
}

export default About;
