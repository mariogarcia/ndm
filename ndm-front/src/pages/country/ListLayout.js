import React from 'react'
import { Grid, Row, Col, Button, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import { FigurePanel } from '../../components/FigurePanel'
import { CountryTable } from '../../components/CountryTable'
import { Country } from '../../services/Country'
import {
    editCountry,
    deleteCountry
} from '../../actions'

import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer
} from 'recharts'

const datax = [
      {name: '01/02/2018', newspapers: 1000, countries: 40},
      {name: '02/02/2018', newspapers: 2000, countries: 139},
      {name: '03/02/2018', newspapers: 3000, countries: 280},
      {name: '04/02/2018', newspapers: 4780, countries: 390},
      {name: '05/02/2018', newspapers: 5890, countries: 480},
      {name: '06/02/2018', newspapers: 6390, countries: 580},
      {name: '07/02/2018', newspapers: 6490, countries: 630},
];

/**
 * @since 0.1.0
 */
class ListLayout extends React.Component {

    constructor() {
        super()
        this.state = {
            countries: Array.of(),
            countriesCount: 0,
            countriesProgress:0
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
                        <ResponsiveContainer height={300} width='100%'>
    	                    <LineChart height={300} data={this.state.countriesProgress}
                                   margin={{top: 30, right: 30, left: 20, bottom: 10}}>
                            <XAxis dataKey="published"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                        </LineChart>
                        </ResponsiveContainer>
                        </Panel>
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
