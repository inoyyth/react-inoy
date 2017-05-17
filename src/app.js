import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const UlWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const LiWrapper = styled.li`
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      background-color: #111;
    }
  }
`;

export default class App extends React.Component {
    render() {
      return(
        <UlWrapper>
          <LiWrapper><a href="">Home</a></LiWrapper>
        <LiWrapper><a href="">About</a></LiWrapper>
      <LiWrapper><a href="">Contact</a></LiWrapper>
        </UlWrapper>
      )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
