import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { FigurePanel } from '../../components/FigurePanel'
import { NewspaperTable } from '../../components/NewspaperTable'
import { TagsPanel } from '../../components/TagsPanel'
import { Country } from '../../services/Country'

class DetailLayout extends React.Component {

    constructor(props) {
        super()
        this.state = {
            country: {
                newspapers: Array.of(),
                noNewspapers: 0,
                noArticles: 0,
                noAuthors: 0,
                relevantWords: Array.of()
            }
        }
    }

    componentDidMount() {
        this.props.data.then((data) => {
            this.setState({country: data.country})
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={3}>
                        <FigurePanel title="Newspapers" value={this.state.country.noNewspapers}/>
                    </Col>
                    <Col xs={3}>
                        <FigurePanel title="Articles" value={this.state.country.noArticles}/>
                    </Col>
                    <Col xs={6}>
                        <TagsPanel
                            relevantWords={this.state.country.relevantWords}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <NewspaperTable
                            newspapers={this.state.country.newspapers}
                            onClick={this.props.onClick} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (row) => dispatch(push('/newspaper/' + row.id))
    }
}

export const DetailLayoutContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailLayout))
