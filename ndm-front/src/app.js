import React, { Component } from 'react';

import {
    NewspapersListPage,
    NewspapersDetailPage
} from './pages';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';

export class App extends Component {
  render() {
      return (
          <Router>
              <div>
              <Link to="/newspapers" exact="true">Newspapers</Link>
              <Switch>
                  <Route path="/newspapers" exact={true} component={NewspapersListPage}/>
                  <Route path="/newspapers/detail/:site" exact={true} component={NewspapersDetailPage}/>
              </Switch>
              </div>
          </Router>
      );
  }
}
