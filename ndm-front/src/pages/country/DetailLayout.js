import React, { Component } from 'react'

import SimpleBarChart from '../../components/SimpleBarChart'
import TwoLevelPieChart from '../../components/TwoLevelPieChart'
import NewspaperList from '../../components/NewspaperList'
import FigurePanel from '../../components/FigurePanel'

import {
    Navbar,
    Nav,
    NavItem,
    Grid,
    Row,
    Col,
    Button,
    Panel, Image
} from 'react-bootstrap'

import { TagCloud } from "react-tagcloud"

const tags = [
    { value: "Diana Quer", count: 100 },
    { value: "Chicle", count: 80 },
    { value: "Copa del Rey", count: 67 },
    { value: "Puigdemont", count: 68 },
    { value: "Messi", count: 55 },
    { value: "Reyes", count: 33 },
    { value: "Guardia Civil", count: 33 },
    { value: "Juguetes", count: 18 },
    { value: "Apple", count: 18 },
    { value: "Investigacion", count: 33 },
    { value: "Macron", count: 33 },
    { value: "Bomba frio", count: 20 }
]

const options = {
    luminosity: 'dark',
    hue: 'blue'
}

export class Detail extends Component {

    constructor(props) {
        super()

        this.state = {
            newspaper: props.match.params.site
        }
    }

    componentDidMount() {
        console.log("yes")
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6}>
                        <FigurePanel title="Country" value="Spain"/>
                    </Col>
                    <Col xs={2}>
                        <FigurePanel title="Newspapers" value="120"/>
                    </Col>
                    <Col xs={2}>
                        <FigurePanel title="Articles" value="12.000"/>
                    </Col>
                    <Col xs={2}>
                        <FigurePanel title="Authors" value="220"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Panel header="Tags">
                            <TagCloud className="text-center" minSize={20}
                                      maxSize={36}
                                      colorOptions={options}
                                      tags={tags}/>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Panel header="Categories">
                            <SimpleBarChart/>
                        </Panel>
                    </Col>
                    <Col xs={4}>
                        <Panel header="Love/Hate">
                            <TwoLevelPieChart/>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Panel header="Categories">
                            <NewspaperList/>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
