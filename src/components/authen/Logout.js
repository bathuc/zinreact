import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from "../../actions/authAction";

class Logout extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(logout());
        // this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                Logout
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // isLogin: state.auth.isLogin,
    // auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
