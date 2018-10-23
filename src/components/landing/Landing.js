import React, { Component } from "react";
import Control from "../../components/layout/Control";
import { styled } from "styled-components";
class Landing extends Component {
  render() {
    return (
      <section class="section landing">
        <div className="item-container">
          <div className="item main">
            <img src="assets/x_blue.png" alt="X" />
            <h1 class="gradient1">Welcome to "Lazy Paradise"</h1>
            <p>
              "Laziness" can be a key of future development, the "Laziness" here
              does not mean the quality of being unwilling to work or use
              energy, the "Laziness" here simply means being
              <strong> Creative </strong>
              to facilitate people’s life!
            </p>
          </div>
        </div>
        <Control path={this.props.location} />
      </section>
    );
  }
}

export default Landing;
