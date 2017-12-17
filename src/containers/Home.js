import React, { Component } from 'react';
import Nav from './Nav';
import NewAdForm from './NewAdForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <NewAdForm />
      </div>
    );
  }
}

export default Home;
