import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'

import {
    Grid,
    Row,
    Col,
    Panel
} from 'react-bootstrap'

import { Country } from '../../services/Country'
import { CountryTable } from '../../components/CountryTable'
import { CountryEvolutionPanel } from '../../components/CountryEvolutionPanel'

/**
 * Page layout where all available countries are listed
 *
 * @since 0.1.0
 */
class ListLayout extends React.Component {

    constructor() {
        super()
        this.state = {
            countries: [],
            countriesCount: 0,
            countriesProgress: []
        }
    }

    componentDidMount() {
        Country.listAll().then((data) => {
            const payload = data.data.data
            this.setState({
                countriesCount: payload.countryStats.count,
                countriesProgress: payload.countryStats.overtime,
                countries: payload.countries
            })
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Panel header="Registered countries">
                            <CountryEvolutionPanel
                                evolution={this.state.countriesProgress} />
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CountryTable
                            countries={this.state.countries}
                            onClick={this.props.onClick} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: [],
        countriesCount: 0,
        countriesProgress: []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (row) => dispatch(push('/country/' + row.id))
    }
}

export const ListLayoutContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLayout))
