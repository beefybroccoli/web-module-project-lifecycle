import React from "react";
import styled from "styled-components";
import * as con from "./constant";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class UserCard extends React.Component {
  componentDidMount() {
    const promise = con.API_Call_Profile(props.input_object.login);
    promise.then((res) => {
      //   console.log("dashboard.js - data = ", res.data);
      this.setState({ ...this.state, userData: res.data });
    });
  }
  render() {
    return (
      <Container>
        <h3>userCard.js</h3>
      </Container>
    );
  }
}
