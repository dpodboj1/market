import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

class NewAdForm extends Component {
  render() {
    return (
      <Container text>
        <Form>
          <Form.Field>
            <label htmlFor="oglas">
              Ime oglasa
              <input placeholder="Ime oglasa" id="oglas" />
            </label>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default NewAdForm;
