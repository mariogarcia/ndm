import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Country } from '../../services/Country'
import { CountryList } from '../../components/CountryList'

const List = ({countries}) => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h1>Countries</h1>
                <CountryList countries={countries}/>
            </Col>
        </Row>
    </Grid>
)

const getCountries = () => {
    Country.listAll()
}

const mapStateToProps = state => {
  return {
    countries: getCountries(state.country)
  }
}

const ListLayout = connect(mapStateToProps)(List)

export default ListLayout
