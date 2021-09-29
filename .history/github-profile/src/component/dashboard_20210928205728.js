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
      console.log("dashboard.js - data = ", res.data);
      this.setState()
    });
  }

  //run on every render
  componentDidUpdate() {}

  //run whenever an update of state occur
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Container>
        <h3>dashboard.js</h3>
      </Container>
    );
  }
}
