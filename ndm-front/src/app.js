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
import { DetailLayoutContainer as NewspaperDetail } from './pages/newspaper/DetailLayout'
import { history } from './router/store'

import {
    Router,
    Switch,
    Route
} from 'react-router-dom'

export class App extends Component {
  render() {
      return (
          <Router history={history}>
              <Grid>
                  <Row>
                      <Col xs={12}>
                          <Grid>
                              <Row>
                                  <Col xs={12}>
                                      <Navbar>
                                          <Navbar.Header>
                                              <Navbar.Brand>
                                                  <a>NewsDoMaths</a>
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
                              <Route path="/newspaper/:id" exact={true} component={NewspaperDetail}/>
                          </Switch>
                      </Col>
                  </Row>
              </Grid>
          </Router>
      );
  }
}
