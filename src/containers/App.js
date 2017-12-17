import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Unknown from '../components/Unknown';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Unknown} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
