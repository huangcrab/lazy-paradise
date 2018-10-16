import React, { Component } from "react";
import Loading from "./components/layout/Loading";
import Landing from "./components/landing/Landing";
import Demos from "./components/demo/Demos";
import { Provider } from "./context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Demos />
        </div>
      </Provider>
    );
  }
}

export default App;
