import React, { Component } from 'react';

class FrontHeader extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="header">
                <div className="container d-flex justify-content-between p-3">
                    <h4 className="text-success">front</h4>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link btn" onClick={() => this.props.history.push('/login') } >Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn" onClick={() => this.props.history.push('/signup') } >Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FrontHeader;