import React, { Component } from "react";
import Loading from "./components/layout/Loading";
import Landing from "./components/landing/Landing";
import Demos from "./components/demo/Demos";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Loading />
        <Landing /> */}
        <Demos />
      </div>
    );
  }
}

export default App;
