import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

class Demo extends Component {
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
          <div className="display-item item">
            <h2>{items[index].name}</h2>
            <h3>
              Demo {index + 1} / {items.length}
            </h3>
            <div className="icon-group">
              <img alt="Angular" title="Angular" src="assets/angular.png" />
              <img alt="MongoDB" itle="MongoDB" src="assets/mongodb.png" />
              <img alt="NodeJS" title="NodeJS" src="assets/node-dot-js.png" />
              <img
                alt="Bootstrap"
                title="Bootstrap"
                src="assets/bootstrap.png"
              />
              <img alt="Heroku" title="Heroku" src="assets/heroku.png" />
              <img alt="MLab" title="MLab" src="assets/mlab.png" />
            </div>
            <br />
            <div className="wrapper">
              <a
                className="frame-overlay"
                target="_blank"
                rel="noopener noreferrer"
                href={items[index].link}
              >
                {" "}
              </a>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

Demo.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired
};

export default Demo;
