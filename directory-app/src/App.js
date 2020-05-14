import React, { Component } from "react";
import "./App.css";
import data from "./data.js";
import Template from "./components/Template";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      people: data,
      index: 0,
    };
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <div class="header">
          <h3>Home</h3>
        </div>
        <div class="background">
          <div class="template-box">
            <Template index={this.state.index} />
          </div>
        </div>
      </div>
    );
  }
}
