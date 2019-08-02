import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import $ from "jquery";
import validate from 'jquery-validation';

import {Auth} from '../../Api';
import FormData from 'form-data';
import {updateAuthStatus} from "../../actions/authAction";

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        // check if from sign up
        if(localStorage.getItem('signup')) {
            $('.register-success').html(localStorage.getItem('signup'));
            $('.register-success').show();
            localStorage.setItem('signup','');
        }
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
        $('.login-fail').hide();
        $('.register-success').hide();
    }
	
    handleChangePass = (e) => {
        this.setState({ password: e.target.value });
        $('.login-fail').hide();
        $('.register-success').hide();
    }

    handleSubmit = async () => {
        if ($("#frmForm").valid()) {
            let formData = new FormData()
            formData.append("email", this.state.email)
            formData.append("password", this.state.password)

            try {
                const uri = 'http://zinapi.tk/admin/login';
                let response = await axios.post(uri, formData);
                let data = response.data;
                console.log(data);
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                //axios.defaults.headers.common['Authorization'] = null;

                let getAdminUri = 'http://zinapi.tk/admin/get-admin';
                const adminRespond = await axios.post(getAdminUri);
                const admin = adminRespond.data;
                let isAuthen = true, token = data.token;
                this.props.dispatch( updateAuthStatus(isAuthen, admin, token));
            } catch (e) {
                console.log('caught error:', e);
                $('.login-fail').html("Email or password is wrong!");
                $('.login-fail').show();
            }
        }
    }

    render() {
        let hide = {display:"none"};
        $("#frmForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                    minlength: 5,
        		    maxlength: 60,
                },
                password: {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                email: {
                    required: "Email is required",
                    email: "Email is invalid",
                },
                password: {
                    required: "Password is required",
                }
            },
        });

        return (
            <div className="container">
                <div className="m-auto w-50">
                    <form id="frmForm">
                        <div className="alert alert-success register-success" style={hide}></div>
                        <div className="alert alert-danger login-fail" style={hide}></div>
                        <div className="page-wrapper">
                            <div className="form-group row">
                                <label className="col-md-3">Email</label>
                                <div className="col-md-9">
                                    <input name="email" type="text" className="form-control" onChange={ (e) => this.setState({ email: e.target.value }) }/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Password</label>
                                <div className="col-md-9">
                                    <input id="password" name="password" type="password" className="form-control" onChange={ (e) => this.setState({ password: e.target.value }) } autoComplete="new-password"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3"></label>
                                <div className="col-md-9">
                                    <button type="button" className="btn btn-primary btn-submit" onClick={this.handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
    dispatch : dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)