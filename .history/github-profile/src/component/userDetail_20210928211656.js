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
    const {}
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
avatar_url: "https://avatars.githubusercontent.com/u/16412641?v=4"
bio: null
blog: ""
company: null
created_at: "2015-12-23T10:05:59Z"
email: null
followers_url: "https://api.github.com/users/beefybroccoli/followers"
html_url: "https://github.com/beefybroccoli"
login: "beefybroccoli"
name: "TedKim"
node_id: "MDQ6VXNlcjE2NDEyNjQx"
repos_url: "https://api.github.com/users/beefybroccoli/repos"
updated_at: "2021-08-11T15:10:19Z"
url: "https://api.github.com/users/beefybroccoli"
*/
