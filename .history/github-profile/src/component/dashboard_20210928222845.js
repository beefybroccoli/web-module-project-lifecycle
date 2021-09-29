import React from "react";
import styled from "styled-components";
import Followers from "./followers";
import UserDetail from "./userDetail";
import * as con from "./constant";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class Dashboard extends React.Component {
  state = { userData: null, userInput: "", followers:[] };

  cb_getUserDataFromAPI = (input_username = "") => {
    const promise = con.API_Call(
      input_username === "" ? con.My_Username : input_username
    );
    promise.then((res) => {
      //   console.log("dashboard.js - data = ", res.data);
      this.setState({ ...this.state, userData: res.data });
    });
  };

  cb_getInput = (input_text) => {
    this.setState({ ...this.state, userInput: input_text });
  };

  //run once
  /**
   * initially, load the python user onto dashboard
   */

  componentDidMount() {
    this.cb_getUserDataFromAPI("gayanvoice");
  }

  //run whenever state changes
  /**
   * when userInput change, the userDtail.js retrieve a new user profile
   * @param {*} prevProps
   * @param {*} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("dashboard.js - diff prevState=", prevState);
      console.log("dashboard.js - diff this.state = ", this.state);
      if (this.state.userInput !== "") {
        this.cb_getUserDataFromAPI(this.state.userInput);
        this.setState({ ...this.state, userInput: "" });
      }
    }
  }

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
        <Followers input_arry={} />
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
        <label>
          {" Search User : "}
          <input
            autoFocus
            type="text"
            name="input"
            id="input"
            value={this.state.input}
            onChange={this.cb_onChange}
            cb_getInput={this.cb_getInput}
          />
        </label>
      </form>
    );
  }
}
