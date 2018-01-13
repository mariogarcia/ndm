import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';

import { ListLayoutContainer } from './pages/country/ListLayout';
import { DetailLayoutContainer } from './pages/country/DetailLayout';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'

export class App extends Component {
  render() {
      return (
          <Router>
              <Grid>
                  <Row>
                      <Col xs={12}>
                          <Grid>
                              <Row>
                                  <Col xs={12}>
                                      <Navbar>
                                          <Navbar.Header>
                                              <Navbar.Brand>
                                                  <a href="#">NewsDoMaths</a>
                                              </Navbar.Brand>
                                          </Navbar.Header>
                                          <Nav>
                                              <NavItem href="/country">Countries</NavItem>
                                              <NavItem href="/newspaper">Newspapers</NavItem>
                                          </Nav>
                                      </Navbar>
                                  </Col>
                              </Row>
                          </Grid>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12}>
                          <Switch>
                              <Route path="/country" exact={true} component={ListLayoutContainer}/>
                              <Route path="/country/:id" exact={true} component={DetailLayoutContainer}/>
                          </Switch>
                      </Col>
                  </Row>
              </Grid>
          </Router>
      );
  }
}
