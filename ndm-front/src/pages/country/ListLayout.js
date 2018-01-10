import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pager,Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import { FigurePanel } from '../../components/FigurePanel'
import { CountryTable } from '../../components/CountryTable'

/**
 * @since 0.1.0
 */
export class ListLayout extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <FigurePanel title="Registered Countries" value="112"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CountryTable countries={Array.of()} onClick={() => alert("aa")}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ListLayout
