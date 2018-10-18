import React, { Component } from "react";
import Loading from "./components/layout/Loading";
import Landing from "./components/landing/Landing";
import Demos from "./components/demo/Demos";
import Projects from "./components/projects/Projects";
import { Provider } from "./context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          {/* <Demos /> */}
          <Projects />
        </div>
      </Provider>
    );
  }
}

export default App;
