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
    const {
      avatar_url,
      bio,
      blog,
      company,
      created_at,
      email,
      followers_url,
      html_url,
      login,
      name,
      repos_url,
      url,
    } = this.props.input_object;
    return (
      <Container>
        <h3>userDetail.js</h3>
        <p>
          {this.props.input_object && JSON.stringify(this.props.input_object)}
        </p>
        { avatar_url? <p>{}</p> : null}
        { bio? <p>{bio}</p> : null}
        { bog? <p>{blog}</p> : null}
        { company? <p>{company}</p> : null}
        { email? <p>{email}</p> : null}
        { html_url? <p>{html_url}</p> : null}
        { login? <p>{login}</p> : null}
        { name? <p>{name}</p> : null}
        { repos_url? <p>{repos_url}</p> : null}
        {url ? <p>{url}</p> : null}
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

avatar_url,
bio,
blog,
company,
created_at,
email,
followers_url,
html_url,
login,
name,
repos_url,
url,

*/
