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

        {avatar_url ? <Img src={avatar_url} alt="user logo" /> : null}
        <p>
          {name ? `name: ${name}` : null}
          {" / "} {login ? `username: ${login}` : null}
        </p>
        {bio ? <p>bio: {bio}</p> : null}
        {company ? <p>company: {company}</p> : null}
        
        {html_url ? <p>{html_url}</p> : null}
        
      </Container>
    );
  }
}
