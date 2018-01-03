import React, { Component } from 'react';
import { Newspapers } from '../../services/Newspapers';
import { Link } from 'react-router-dom';

export class List extends Component {
    constructor() {
        super();
        this.state = {
            newspapers: null
        };

    }
    componentDidMount() {
        let newspapers = Newspapers
            .listAllNewspapers()
            .map(el => <li key={el}><Link to={'/newspapers/detail/' + el}>{el}</Link></li>);

        this.setState({ newspapers: newspapers });
    }
    render() {
        return (
            <div>
                <h1>Newspapers</h1>
                <ul>
                {this.state.newspapers}
                </ul>
            </div>
        );
    }
}
