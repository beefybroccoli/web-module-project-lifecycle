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
  constructor() {
    super();
    this.state = null;
  }

  //run once
  componentDidMount() {
    const promise = con.API_Call(con.My_Username);
    promise.then((res) => {
      //   console.log("dashboard.js - data = ", res.data);
      this.setState(res.data);
    });
  }

  //run on every render
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("dashboard.js - diff prevState=", prevState);
      console.log("dashboard.js - diff this.state = ", this.state);
    }
  }

  //run whenever an update of state occur
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Container>
        <h3>dashboard.js</h3>
        <p>{this.state ? JSON.stringify(this.state) : "waiting"}</p>
        <UserDetail input_object={}/>
      </Container>
    );
  }
}
