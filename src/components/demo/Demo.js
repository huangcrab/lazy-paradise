import React, { Component } from "react";
import PropTypes from "prop-types";

class Demo extends Component {
  render() {
    const { demo, length, index } = this.props;
    return (
      <div className="display-item demo active" id="demo-one">
        <h2>{demo.name}</h2>
        <h3>
          Demo {index} / {length}
        </h3>
        <div className="icon-group">
          <img title="Angular" src="assets/angular.png" />
          <img title="MongoDB" src="assets/mongodb.png" />
          <img title="Note.js" src="assets/node-dot-js.png" />
          <img title="bootstrap" src="assets/bootstrap.png" />
          <img title="heroku" src="assets/heroku.png" />
          <img title="mlab" src="assets/mlab.png" />
        </div>
        <br />
        <div className="wrapper">
          <iframe className="scaled-frame" src="" />
          <a className="frame-overlay" target="_blank" href={demo.link} />
        </div>
      </div>
    );
  }
}
Demo.propTypes = {
  demo: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Demo;
