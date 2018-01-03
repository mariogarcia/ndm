import React, { Component } from 'react';

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
            <div>
                <h1>Newspaper Detail</h1>
                <h3>{this.state.newspaper}</h3>

            </div>
        );
    }
}
