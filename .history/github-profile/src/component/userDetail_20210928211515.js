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
/*
avatar_url: "https://avatars.githubusercontent.com/u/16412641?v=4"
bio: null
blog: ""
company: null
created_at: "2015-12-23T10:05:59Z"
email: null
events_url: "https://api.github.com/users/beefybroccoli/events{/privacy}"
followers: 1
followers_url: "https://api.github.com/users/beefybroccoli/followers"
following: 1
following_url: "https://api.github.com/users/beefybroccoli/following{/other_user}"
gists_url: "https://api.github.com/users/beefybroccoli/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/beefybroccoli"
id: 16412641
location: null
login: "beefybroccoli"
name: "TedKim"
node_id: "MDQ6VXNlcjE2NDEyNjQx"
organizations_url: "https://api.github.com/users/beefybroccoli/orgs"
public_gists: 0
public_repos: 52

repos_url: "https://api.github.com/users/beefybroccoli/repos"





updated_at: "2021-08-11T15:10:19Z"
url: "https://api.github.com/users/beefybroccoli"

*/
*/