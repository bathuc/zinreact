import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Auth} from "../Api";

export default class Example extends Component {
    handleClick = (e) => {
        Auth.get()
            .then((respond) => {
                console.log('from api',respond);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <p>I'm an example component!</p>
                                <button onClick={this.handleClick} type="button" className="btn btn-success">Success</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
