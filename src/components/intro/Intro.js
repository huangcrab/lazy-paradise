import React, { Component } from "react";
import Control from "../../components/layout/Control";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Skills from "./Skill";
import About from "./About";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
`;
const Item = styled.div`
  text-align: center;
  margin: 0 auto;
  position: absolute;
  height: 200px;
  left: 0;
  right: 0;
  overflow-y: scroll;

  @media only screen and (min-height: 768px) {
    height: 300px;
    overflow-y: hidden;
  }
`;

class Intro extends Component {
  state = {
    name: "SKILLS",
    content: 0,
    components: [
      { name: "SKILLS", load: <About /> },
      { name: "ABOUT ME", load: <Skills /> }
    ]
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
        <div className="video-overlay">
          <video
            className="fullscreen-video"
            src="assets/videos/video.mp4"
            autoPlay={true}
            loop={true}
          />
        </div>
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
            <Container className="info-section">
              <TransitionGroup>
                <CSSTransition
                  key={this.state.content}
                  timeout={1000}
                  classNames={"fade"}
                >
                  <Item>{this.state.components[this.state.content].load}</Item>
                </CSSTransition>
              </TransitionGroup>
            </Container>
            <div className="btn info-btn" onClick={this.switchView.bind(this)}>
              {this.state.components[this.state.content].name}
            </div>
          </div>
        </div>
        <Control path={this.props.location} />
      </div>
    );
  }
}

export default Intro;
