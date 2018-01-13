import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { FigurePanel } from '../../components/FigurePanel'
import { NewspaperTable } from '../../components/NewspaperTable'
import { Newspaper } from '../../services/Newspaper'

const DetailLayout = ({newspapers}) => (
    <Grid>
        <Row>
            <Col xs={12}>
                <FigurePanel title="Registered Newspapers" value="14"/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <NewspaperTable newspapers={newspapers}/>
            </Col>
        </Row>
    </Grid>
)

const mapStateToProps = state => {
    return {
        newspapers: Newspaper.listAll()
    }
}

export const DetailLayoutContainer = connect(mapStateToProps)(DetailLayout)
