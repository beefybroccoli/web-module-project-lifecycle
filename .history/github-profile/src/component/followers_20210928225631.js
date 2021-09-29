import React from "react";
import styled from "styled-components";
import UserCard from "./userCard";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
  height: 30vh;
  overflow: scroll;
  line-height: 1px;
`;
export default class Followers extends React.Component {
  render() {
    return (
      <Container>
        <h3>followers.js</h3>
        {Array.from(this.props.input_array_of_objects).map(
          (eachObject, index) => {
            return (
              <UserCard
                input_object={eachObject}
                key={index}
                cb_getInput={this.props.cb_getInput}
              />
            );
          }
        )}
      </Container>
    );
  }
}
