import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { FigurePanel } from '../../components/FigurePanel'
import { NewspaperTable } from '../../components/NewspaperTable'
import { Country } from '../../services/Country'


class DetailLayout extends React.Component {

    constructor(props) {
        super()
        this.state = {
            country: {
                newspapers: Array.of()
            }
        }
    }

    componentDidMount() {
        this.props.data.then((data) => {
            console.log(data.data.data.country)
            this.setState({country: data.data.data.country})
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4}>
                        <FigurePanel title="Registered Newspapers" value={this.state.country.noNewspapers}/>
                    </Col>
                    <Col xs={4}>
                        <FigurePanel title="Registered Articles" value={this.state.country.noArticles}/>
                    </Col>
                    <Col xs={4}>
                        <FigurePanel title="Registered Authors" value={this.state.country.noAuthors}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <NewspaperTable newspapers={this.state.country.newspapers}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const countryId = ownProps.match.params.id

    return {
        data: Country.findById(countryId)
    }
}

export const DetailLayoutContainer = withRouter(connect(
    mapStateToProps
)(DetailLayout))
