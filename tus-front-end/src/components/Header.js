import React, { Component } from 'react';
import NavElement from './NavElement';

class Header extends Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <div className='header'>
                <NavElement title='Home' onClick={this.handleClick} />
                <NavElement title='Documentation' onClick={this.handleClick} />
            </div>
        );
    }
}
export default Header;
