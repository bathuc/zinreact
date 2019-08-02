import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import appHistory from './appHistory';
import { connect } from 'react-redux';
// --------- authen ---------
import Example from './components/Example'
import Header from './components/layouts/Header'
import FrontHeader from './components/layouts/FrontHeader'
import {checkAuthStatus} from "./actions/authAction";
import Test from './components/authen/Test';
import Login from './components/authen/Login';
import Logout from './components/authen/Logout';
import SignUp from './components/authen/SignUp';
import PageNotFound from './components/authen/PageNotFound';
import RedirectToHome from './components/authen/RedirectToHome';
import RedirectToLogin from './components/authen/RedirectToLogin';
import Home from './components/Home/Home';
import Dashboard  from './components/admin/Dashboard'

class Router extends Component {
    constructor(props) {
        super(props);
        this.props.init();
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        console.log('isAuthen', isLoggedIn);
        console.log('token_auth:', localStorage.getItem('token'));
        if (isLoggedIn == false || isLoggedIn == 'false') {
            return (
                <ConnectedRouter history={appHistory}>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/test" component={Test} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/admin/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/logout" component={Logout} />
                            <Route path="/" component={RedirectToLogin} />
                        </Switch>
                    </React.Fragment>
                </ConnectedRouter>
            );
        }

        // Project Route
        return (
            <ConnectedRouter history={appHistory}>
                <React.Fragment>
                    {/*router*/}
                    <Switch>
                        { /* redirect to home after login */ }
                        <Route path="/login" component={RedirectToHome} />
                        <Route path="/admin/login" component={RedirectToHome} />
                        <Route path="/signup" component={RedirectToHome} />
                        <Route path="/admin/logout" component={Logout} />
                        { /* Project content */ }
                        <Route exact path="/" component={RedirectToHome} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/admin/dashboard" component={Dashboard} />
                        <Route component={PageNotFound} />
                    </Switch>
                </React.Fragment>
            </ConnectedRouter>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn : state.auth.isLoggedIn,
    user : state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    dispatch : dispatch,
    init: () => dispatch(checkAuthStatus())
});


export default connect(mapStateToProps, mapDispatchToProps)(Router);
