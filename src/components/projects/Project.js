import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

class Project extends Component {
  render() {
    const { items, index, direction } = this.props;
    return (
      <TransitionGroup
        className="item-container"
        childFactory={child =>
          React.cloneElement(child, {
            classNames: direction === "right" ? "right" : "left"
          })
        }
      >
        <CSSTransition
          key={index}
          timeout={500}
          classNames={direction === "right" ? "right" : "left"}
        >
          <div className="item">
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
  }
}

Project.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired
};

export default Project;
