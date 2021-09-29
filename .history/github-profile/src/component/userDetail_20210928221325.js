import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px black solid;
  margin: 10px;
  padding: 10px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
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
      email,
      html_url,
      login,
      name,
      repos_url,
      url,
    } = this.props.input_object;
    return (
      <Container>
        <h3>userDetail.js</h3>

        {avatar_url ? <Img src={avatar_url} alt="user logo" /> : null}
        <p>{name ? name: {name}: null}</p>
        
        {login ? <p>username: {login}</p> : null}
        {bio ? <p>bio: {bio}</p> : null}
        {company ? <p>company: {company}</p> : null}
        {blog ? <p>{blog}</p> : null}

        {email ? <p>email: {email}</p> : null}
        {html_url ? <p>{html_url}</p> : null}

        {repos_url ? <p>repo url: {repos_url}</p> : null}
      </Container>
    );
  }
}

/*
avatar_url: "https://avatars.githubusercontent.com/u/16412641?v=4"
bio: null
blog: ""
company: null
email: null
followers_url: "https://api.github.com/users/beefybroccoli/followers"
html_url: "https://github.com/beefybroccoli"
login: "beefybroccoli"
name: "TedKim"
repos_url: "https://api.github.com/users/beefybroccoli/repos"
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
