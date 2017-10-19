import React, { Component } from 'react';
import '../style/App.css';
import '../style/font-awesome-4.7.0/css/font-awesome.min.css'

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <i className='fa fa-home fa-2x icon' aria-hidden='true'></i><span className='header-text'>Home</span>
                <i className='fa fa-list fa-2x icon' aria-hidden='true'></i><span className='header-text'>Documentation</span>
            </div>
        );
    }
}
export default Header;
