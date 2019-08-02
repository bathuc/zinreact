import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Auth} from '../../Api'
import FormData from 'form-data'
import $ from "jquery";
import validate from 'jquery-validation';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        if ($("#frmForm").valid()) {
            let form = new FormData()
            form.append("name", this.state.name)
            form.append("email", this.state.email)
            form.append("password", this.state.password)

            Auth.register(form)
                .then(response => {
                    localStorage.setItem('signup','Sign up is successfully');
                    this.props.history.push('/login');
                })
                .catch(function (error) {
                    $('.register-fail').html(error.response.data.error);
                    $('.register-fail').show();
                });;
        }
    }
    render() {
        let hide = {display:"none"};
        $.validator.addMethod("valid_email", function (value, element) {
            if(value!="") {
                var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(!value.match(regex)) {
                    return false;
                }
            }
            return true;
        });

        $("#frmForm").validate({
            rules: {
                name: { required: true },
                email: {
                    required: true,
                    valid_email: true,
                    maxlength: 60,
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                name: {
                    required: "name is require",
                },
                email: {
                    required: "Email require",
                    valid_email: "Email is invalid",
                },
                password: {
                    required: "name is require",
                },
                confirm_password: {
                    required: "Please confirm your password",
                    equalTo: "Password dit not match"
                }
            },
            errorPlacement: function(error, element) {
                // add class
                error.addClass('text-danger');
                //insert after parent
                error.appendTo(element.parent());
            }
        });

        return (
            <div className="container">
                <form id="frmForm">
                    <div className="m-auto w-50">
                        <div className="alert alert-danger register-fail" style={hide}></div>

                        <div className="form-group row">
                            <label className="col-md-3">Name</label>
                            <div className="col-md-9">
                                <input name="name" type="text" className="form-control" onChange={ (e) => this.setState({ name: e.target.value }) } />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3">Email</label>
                            <div className="col-md-9">
                                <input name="email" type="text" className="form-control" onChange={ (e) => this.setState({ email: e.target.value }) } />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3">Password</label>
                            <div className="col-md-9">
                                <input id="password" name="password" type="password" className="form-control" placeholder="" onChange={ (e) => this.setState({ password: e.target.value }) } />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-3">Confirm Password</label>
                            <div className="col-md-9">
                                <input name="confirm_password" type="password" className="form-control" placeholder=""/>
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
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: () => dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);