import React, { Component } from "react";
import "./App.css";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
class App extends Component {
  render() {
    return (
      <div className="container food__box">
        <h1>Bài Tập Bugger</h1>
        <div className="row">
          <div className="col-6">
            <Burger />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
