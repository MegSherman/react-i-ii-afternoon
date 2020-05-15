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
  
  clickPrevious (index) {
    if (this.state.index === 0) {
      this.setState ({index: data.length - 1})
    } else {
      this.setState ({index: index - 1})
    }
  }
  
  clickNext (index) {
    if (this.state.index === data.length - 1) {
      this.setState ({index: 0})
    } else {
      this.setState ({index: index + 1})
    }
  }

  clickDelete () {
    this.setState.people.splice (index, 1)
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
          <div>
              <button class="button-sides button-left" onClick= { () => this.clickPrevious (this.state.index)}>&lt; Previous</button>
              <button class="center-buttons">Edit</button>
              <button class="center-buttons" onClick= { () => this.clickDelete (this.state.people)}>Delete</button>
              <button class="center-buttons">New</button>
              <button class="button-sides button-right" onClick={ () => this.clickNext (this.state.index)}>Next ></button>
          </div>
        </div>
      </div>
    );
  }
}
