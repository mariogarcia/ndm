import React, { Component } from 'react';
import { Country} from '../../services/Country';
import { Link } from 'react-router-dom';

export class List extends Component {

    constructor() {
        super();
        this.state = {
            countries: null
        };

    }

    componentDidMount() {
        let countries = Country
            .listAll()
            .map(el => <li key={el}><Link to={'/country/' + el}>{el}</Link></li>);

        this.setState({ countries: countries });
    }

    render() {
        return (
            <div>
                <h1>Countries</h1>
                <ul>
                    {this.state.countries}
                </ul>
            </div>
        );
    }
}
