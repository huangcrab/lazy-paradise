import React, { Component } from "react";
import Control from "../../components/layout/Control";
class Landing extends Component {
  render() {
    return (
      <div class="section">
        <img src="assets/x_blue.png" alt="X" />
        <h1 class="gradient1">Welcome to "Lazy Paradise"</h1>
        <p>
          "Laziness" can be a key of future development, the "Laziness" here
          does not mean the quality of being unwilling to work or use energy,
          the "Laziness" here simply means being
          <strong>creative</strong> to facilitate people’s life!
        </p>
        <Control path={this.props.location} />
      </div>
    );
  }
}

export default Landing;
