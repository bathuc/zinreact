import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Auth} from '../../Api';

export default class Home extends Component {
    async componentDidMount() {
        let dashboard = await Auth.dashboard();
        console.log('dashboard:', dashboard);
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Component</div>

                            <div className="card-body">
                                <p>I'm a home component!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

