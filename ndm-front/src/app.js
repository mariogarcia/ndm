import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';

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
              <Grid>
                  <Row>
              <Col xs={12}>
              <div className="container">
                          <Navbar>
                              <Navbar.Header>
                                  <Navbar.Brand>
                                       <a href="#">NewsDoMaths</a>
                                  </Navbar.Brand>
                              </Navbar.Header>
                              <Nav>
                                  <NavItem eventKey={1} href="#">By country</NavItem>
                                  <NavItem eventKey={1} href="#">By newspaper</NavItem>
                                  <NavItem eventKey={1} href="#">Day on images</NavItem>
                              </Nav>
              </Navbar>
              </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12}>
                          <Switch>
                              <Route path="/newspapers" exact={true} component={NewspapersListPage}/>
                              <Route path="/newspapers/detail/:site" exact={true} component={NewspapersDetailPage}/>
                          </Switch>
                      </Col>
                  </Row>
              </Grid>
          </Router>
      );
  }
}
