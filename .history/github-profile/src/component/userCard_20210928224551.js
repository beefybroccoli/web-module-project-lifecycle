import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class UserCard extends React.Component {

    component
  render() {
    return (
      <Container>
        <h3>userCard.js</h3>
      </Container>
    );
  }
}
