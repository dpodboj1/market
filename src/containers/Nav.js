import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignIn from '../components/Signin';
import SignOut from '../components/SignOut';
import { auth } from '../firebase';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Menu size="tiny" borderless>
        <Container>
          <Menu.Item>
            <NavLink to="/">Bolha</NavLink>
          </Menu.Item>
          {!currentUser ? (
            <Menu.Menu position="right">
              <Menu.Item>
                <Button>Registracija</Button>
              </Menu.Item>
              <Menu.Item>
                <SignIn />
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item>Zdravo, {currentUser.displayName}!</Menu.Item>
              <Menu.Item>
                <SignOut />
              </Menu.Item>
            </Menu.Menu>
          )}
        </Container>
      </Menu>
    );
  }
}

export default Nav;
