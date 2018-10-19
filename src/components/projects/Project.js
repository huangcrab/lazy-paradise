import React, { Component } from "react";
import { Consumer } from "../../context";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Project extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { items, index, direction } = value;
          return (
            <TransitionGroup className="item-container">
              <CSSTransition key={index} timeout={2000} classNames="fade">
                <div className="display-item item active">
                  <h1>
                    {index + 1} / {items.length}
                    <br />
                    <span>{items[index].name}</span>
                  </h1>
                  <h3>{items[index].date}</h3>
                  <p>{items[index].description}</p>
                </div>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      </Consumer>
    );
  }
}

export default Project;
