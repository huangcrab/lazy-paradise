import React, { Component } from "react";
import Control from "../../components/layout/Control";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Skills from "./Skill";
import About from "./About";
class Intro extends Component {
  state = {
    name: "SKILLS",
    content: 0,
    components: [<About />, <Skills />]
  };
  switchView = () => {
    const index = this.state.content;
    this.setState({
      content: index === 0 ? 1 : 0,
      name: this.state.content === 0 ? "SKILLS" : "ABOUT ME"
    });
  };
  render() {
    return (
      <div className="section about">
        <div className="item-container">
          <div className="item">
            <h1>About Me</h1>
            <div className="social">
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
            </div>
            <TransitionGroup>
              <CSSTransition
                key={this.state.content}
                timeout={100}
                classNames={"fade"}
              >
                <div className="info-section">
                  {this.state.components[this.state.content]}
                </div>
              </CSSTransition>
            </TransitionGroup>
            <div className="btn info-btn" onClick={this.switchView.bind(this)}>
              {this.state.name}
            </div>
          </div>
        </div>
        <Control path={this.props.location} />
      </div>
    );
  }
}

export default Intro;
