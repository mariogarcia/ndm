import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
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
class ListLayout extends React.Component {

    constructor() {
        super()
        this.state = {
            countries: Array.of(),
            countriesCount: 0
        }
    }

    componentDidMount() {
        Country.listAll().then((data) => {
            const payload = data.data.data

            this.setState({
                countriesCount: payload.countryStats.count,
                countries: payload.countries
            })
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <FigurePanel title="Registered Countries" value={this.state.countriesCount}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CountryTable
                            countries={this.state.countries}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: Array.of()
    }
}

export const ListLayoutContainer = connect(
    mapStateToProps,
)(ListLayout)
