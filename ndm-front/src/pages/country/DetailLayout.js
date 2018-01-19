import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { TagCloud } from 'react-tagcloud'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { FigurePanel } from '../../components/FigurePanel'
import { NewspaperTable } from '../../components/NewspaperTable'
import { Country } from '../../services/Country'

const tagsOptions = {
  luminosity: 'dark',
    hue: 'green'
};

class DetailLayout extends React.Component {

    constructor(props) {
        super()
        this.state = {
            country: {
                newspapers: Array.of(),
                relevantWords: Array.of()
            }
        }
    }

    componentDidMount() {
        this.props.data.then((data) => {
            console.log(data.country)
            this.setState({country: data.country})
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={2}>
                        <FigurePanel title="Newspapers" value={this.state.country.noNewspapers}/>
                    </Col>
                    <Col xs={2}>
                        <FigurePanel title="Articles" value={this.state.country.noArticles}/>
                    </Col>
                    <Col xs={2}>
                        <FigurePanel title="Authors" value={this.state.country.noAuthors}/>
                    </Col>
                    <Col xs={6}>
                        <TagCloud minSize={12}
                                  maxSize={35}
                                  colorOptions={tagsOptions}
                                  tags={this.state.country.relevantWords}
                                  onClick={tag => alert(`'${tag.value}' was selected!`)} />
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
