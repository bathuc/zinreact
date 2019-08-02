import React, { Component } from 'react'

class RedirectToLogin extends Component {
    componentDidMount() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div >
                Redirect to Login page ...
            </div>
        )
    }
}

export default RedirectToLogin;

