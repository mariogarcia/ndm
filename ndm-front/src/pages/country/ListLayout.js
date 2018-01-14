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
        this.state = {countries: Array.of()}
    }

    componentDidMount() {
        Country.listAll().then((data) => {
            this.setState({countries: data.data.data.countries})
        })
    }

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
                        <CountryTable
                            countries={this.state.countries}
                            onDelete={() => alert("")}
                            onEdit={() => alert("")}/>
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
