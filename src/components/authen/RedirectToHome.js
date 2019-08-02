import React, { Component } from 'react';

class RedirectToHome extends Component {
    componentDidMount() {
        this.props.history.push('/admin/dashboard');
    }
    render() {
        return (
            <div >
                Redirect to Home ...
            </div>
        )
    }
}

export default RedirectToHome;

