import React, { Component } from 'react';
import SideBar from './SideBar';

class AdminLayout extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="wrapper">
                <header className="main-header">
                    <a href="/admin/login" className="logo">
                        <span className="logo-mini"><b>ALT</b></span>
                        <span className="logo-lg"><b>Admin</b></span>
                    </a>

                    <nav className="navbar" role="navigation">
                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="#" className="image-wrapper dropdown-toggle d-flex w-100 h-100"
                                       data-toggle="dropdown">
                                        <img src="/adminlte/imgs/user-default.jpg" className="user-image" alt="User Image"/>
                                            <span className="d-none d-sm-block">Admin</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a className="btn btn-default btn-flat"
                                                   href="/admin/logout">Logout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="/adminlte/imgs/user-default.jpg" className="rounded-circle" alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>Admin</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>

                        <SideBar/>
                    </section>
                </aside>
                <div className="content-wrapper">
                    {this.props.children}
                </div>

                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        Admin LTE
                    </div>
                    <strong>Copyright &copy; Admin LTE
                    <a href="/admin">Admin LTE</a>.</strong> All rights reserved.
                </footer>
            </div>
        )
    }
}

export default AdminLayout;