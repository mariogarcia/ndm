import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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

const mapStateToProps = (state, ownProps) => {
    const countryId = ownProps.match.params.id

    return {
        newspapers: Newspaper.listAll(countryId)
    }
}

export const DetailLayoutContainer = withRouter(connect(
    mapStateToProps
)(DetailLayout))
