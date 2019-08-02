import React, { Component } from 'react';

class SideBar extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MENU</li>
            </ul>
        )
    }
}

export default SideBar;