import React, { Component } from "react";
import Demo from "./Demo";
import ItemControl from "../../components/layout/ItemControl";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class Demos extends Component {
  state = {
    demos: [
      {
        id: 1,
        name: "Authentication App",
        link: "https://warm-island-73436.herokuapp.com/",
        tech: ["Angular", "MongoDB", "Node.js", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 2,
        name: "Connector App",
        link: "https://limitless-beach-24902.herokuapp.com/",
        tech: ["React", "MongoDB", "Node.js", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 3,
        name: "Client Panel App",
        link: "https://clientpanel-3bd53.firebaseapp.com/",
        tech: ["Angular", "Firebase", "Bootstrap"]
      }
    ],
    index: 0,
    appear: true
  };
  nextItem = () => {
    let newIndex = this.state.index + 1;
    if (newIndex >= this.state.demos.length) {
      newIndex = 0;
    }

    this.setState({
      index: newIndex
    });
  };
  prevItem = () => {
    let newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = this.state.demos.length - 1;
    }
    this.setState({
      index: newIndex
    });
  };
  exitPage = () => {
    console.log("x");
  };
  render() {
    const { demos, index } = this.state;
    return (
      <div>
        <TransitionGroup className="demo-container">
          <CSSTransition key={index} timeout={2000} classNames="fade">
            <Demo index={index + 1} demo={demos[index]} length={demos.length} />
          </CSSTransition>
        </TransitionGroup>
        <ItemControl
          next={this.nextItem}
          prev={this.prevItem}
          exit={this.exitPage}
          name={"Demo"}
        />
      </div>
    );
  }
}

export default Demos;
