import React from "react";
import styled from "styled-components";
import * as con from "./constant";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class UserCard extends React.Component {
  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      email,
      html_url,
      login,
      name,
      repos_url,
      url,
    } = this.props.input_object;
    return (
      <Container>
        <h3>userCard.js</h3>
      </Container>
    );
  }
}
