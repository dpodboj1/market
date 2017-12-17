import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Nav from './Nav';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container textAlign="center" text>
          <Search />
        </Container>
      </div>
    );
  }
}

export default Home;
