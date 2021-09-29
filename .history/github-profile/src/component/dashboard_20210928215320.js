import React from "react";
import styled from "styled-components";
import UserCard from "./userCard";
import UserDetail from "./userDetail";
import * as con from "./constant";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class Dashboard extends React.Component {
  state = { userData: null, userInput: "" };

  //run once
  componentDidMount() {
    
  }

  //run whenever state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("dashboard.js - diff prevState=", prevState);
      console.log("dashboard.js - diff this.state = ", this.state);

    }
  }

  cb_

  cb_getInput = (input_text) => {
    this.setState({ ...this.state, userInput: input_text });
  };
  render() {
    return (
      <Container>
        <h3>dashboard.js</h3>
        <Form cb_getInput={this.cb_getInput} />
        {/* <p>{this.state ? JSON.stringify(this.state) : "waiting"}</p> */}
        {this.state ? null : <p> "waiting"</p>}
        {this.state.userInput === "" ? null : (
          <p> userInput : {this.state.userInput}</p>
        )}
        {this.state.userData && (
          <UserDetail input_object={this.state.userData} />
        )}
      </Container>
    );
  }
}

class Form extends React.Component {
  state = { input: "" };
  cb_onChange = (event) => {
    this.setState({ input: event.target.value });
  };
  cb_onSubmit = (event) => {
    event.preventDefault();
    this.props.cb_getInput(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <form onSubmit={this.cb_onSubmit}>
        <input
          autoFocus
          type="text"
          name="input"
          id="input"
          value={this.state.input}
          onChange={this.cb_onChange}
          cb_getInput={this.cb_getInput}
        />
      </form>
    );
  }
}
