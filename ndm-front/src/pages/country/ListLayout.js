import React from 'react'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
    Grid,
    Row,
    Col,
    Panel
} from 'react-bootstrap'

import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
    ResponsiveContainer
} from 'recharts'

import { Country } from '../../services/Country'

import 'react-table/react-table.css'

/**
 * @since 0.1.0
 */
class ListLayout extends React.Component {

    constructor() {
        super()
        this.state = {
            countries: Array.of(),
            countriesCount: 0,
            countriesProgress: Array.of()
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

    goToCountry(country) {
        this.props.history.push("/country/" + country.id)
    }

    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'name',
            className: 'text-center'
        },{
            Header: 'Added',
            accessor: 'published',
            className: 'text-center'
        }, {
            Header: 'Newspapers',
            accessor: 'noNewspapers',
            className: 'text-center'
        },{
            Header: 'Articles',
            accessor: 'noArticles',
            className: 'text-center'
        },{
            Header: 'Authors',
            accessor: 'noAuthors',
            className: 'text-center'
        }]

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
                        <ReactTable
                            data={this.state.countries}
                            columns={columns}
                            defaultPageSize={10}
                            getTrProps={(state, rowInfo, column, instance) => ({
                                onClick: e => {
                                    this.goToCountry(rowInfo.original)
                                }
                            })}
                            className='-striped -highlight'
                            />
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

export const ListLayoutContainer = withRouter(connect(
    mapStateToProps,
)(ListLayout))
