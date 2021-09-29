import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;
export default class UserDetail extends React.Component {
  render() {
    if (this.props.input_object) {
      console.log("this.props.input_object = ", this.props.input_object);
    }
    return (
      <Container>
        <h3>userDetail.js</h3>
        <p>
          {this.props.input_object && JSON.stringify(this.props.input_object)}
        </p>
      </Container>
    );
  }
}

/*

