import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

class Nav extends Component {
  render() {
    return (
      <Menu size="tiny" borderless>
        <Container>
          <Menu.Item>Bolha</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button>Registracija</Button>
            </Menu.Item>
            <Menu.Item>
              <Button>Prijava</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Nav;
