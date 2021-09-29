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
export default class UserCard extends React.Component {
  cb_onClick = (event) => {
    event.stopPropagation();
    // console.log("userDetail.js - run cb_onClick");
    
    this.props.cb_getInput(JSON.stringify(this.props.input_object.login));
  };
  render() {
    const { avatar_url, bio, company, html_url, login, name } =
      this.props.input_object;
    return (
      <Container onClick={this.cb_onClick}>
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
