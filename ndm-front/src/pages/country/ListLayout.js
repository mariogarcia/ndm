import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pager,Grid, Row, Col, Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { FigurePanel } from '../../components/FigurePanel'
import { CountryTable } from '../../components/CountryTable'
import { Country } from '../../services/Country'
import {
    editCountry,
    deleteCountry
} from '../../actions'

/**
 * @since 0.1.0
 */
const ListLayout = ({countries, onDelete, onEdit}) => (
    <Grid>
        <Row>
            <Col xs={12}>
                <FigurePanel title="Registered Countries" value="112"/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <CountryTable
                    countries={countries}
                    onDelete={onDelete}
                    onEdit={onEdit}/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Button bsStyle="primary">New</Button>
            </Col>
        </Row>
    </Grid>
)

const mapStateToProps = state => {
    return {
        countries: Country.listAll()
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEdit: (id) => { dispatch(editCountry(id)) },
        onDelete: (id) => { dispatch(deleteCountry(id)) }
    }
}


export const ListLayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLayout)
