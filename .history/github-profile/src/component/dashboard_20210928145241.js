import React from "react";
import styled from "styled-components";
import UserCard from "./userCard";
import UserDetail from "./userDetail";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class Dashboard extends React.Component {

        
  render() {
    return (
      <Container>
        <h3>dashboard.js</h3>
      </Container>
    );
  }
}
