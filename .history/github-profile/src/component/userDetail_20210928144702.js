import React from "react";
import styled from "styled-components";
import UserDetail from './userDetail';

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class UserDetail extends React.Component {
  render() {
    return (
      <Container>
        <h3>UserDetail.js</h3>
      </Container>
    );
  }
}
