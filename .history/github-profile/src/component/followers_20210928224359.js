import React from "react";
import styled from "styled-components";
import UserCard from "./userCard";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
  height: 30vh;
`;
export default class Followers extends React.Component {
  render() {
    return (
      <Container>
        <h3>followers.js</h3>
        {Array.from(this.props.input_array).map((each, index) => {
          return <UserCard input_link={each} key={index} />;
        })}
      </Container>
    );
  }
}
