import React, { Component } from 'react'
import styled from 'styled-components'
import px2vw from "../utils/px2vw";
export default class Login extends Component {
    render() {
    return (
      <Container>
       <form>
       <row1>
           <col25>
           <label for="fname">First Name</label>
           </col25>
           <col75>
           <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
           </col75>
       </row1>
      </form>
      </Container>
    )
    }
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
const row1 = styled.div`
   content: "";
  display: table;
  clear: both;
`
const col25 = styled.div`
float: left;
  width: 25%;
  margin-top: 6px;


`
const col75 = styled.div`
float: left;
  width: 75%;
  margin-top: 6px;

`

