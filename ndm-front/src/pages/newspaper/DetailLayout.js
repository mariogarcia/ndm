import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ArticleTable } from '../../components/ArticleTable'
import { Newspaper } from '../../services/Newspaper'

class DetailLayout extends React.Component {

    constructor(props) {
        super()
        this.state = {
            newspaper: {}
        }
    }

    componentDidMount() {
        this.props.data.then((data) => {
            this.setState({
                articles: data.newspaper.articles
            })
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <ArticleTable
                            articles={this.state.articles} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const newspaperId = ownProps.match.params.id

    return {
        data: Newspaper.findById(newspaperId)
    }
}

export const DetailLayoutContainer = withRouter(connect(
    mapStateToProps
)(DetailLayout))
