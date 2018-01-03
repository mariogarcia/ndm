import React, { Component } from 'react';
import {SimpleBarChart} from '../../components/categories';
import {TwoLevelPieChart} from '../../components/categories2';
import {TopStories} from '../../components/categories3';

import {
    Navbar,
    Nav,
    NavItem,
    Grid,
    Row,
    Col,
    Button,
    Panel, Image
} from 'react-bootstrap';
import { TagCloud } from "react-tagcloud";

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
];

const options = {
  luminosity: 'dark',
  hue: 'blue'
};

export class Detail extends Component {
    constructor(props) {
        super();
        this.state = {
            newspaper: props.match.params.site
        };

    }
    componentDidMount() {

    }
    render() {
        return (
            <Grid>


                <Row>
                    <Col xs={6}>
                        <Panel header="Country">
                            <h1 className="text-center">Spain</h1>
                        </Panel>
                    </Col>
                    <Col xs={2}>
                        <Panel header="Newspapers">
                            <h1 className="text-center">120</h1>
                        </Panel>
                    </Col>
                    <Col xs={2}>
                        <Panel header="Articles">
                            <h1 className="text-center">12.000</h1>
                        </Panel>
                    </Col>
                    <Col xs={2}>
                        <Panel header="Authors">
                            <h1 className="text-center">220</h1>
                        </Panel>
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
                <TopStories/>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
