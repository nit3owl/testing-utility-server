import React, { Component } from 'react';

class NavElement extends Component {

    constructor(props) {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(e);
    }

    render() {
        let title = this.props.title;

        return (
            <span className='nav-element' id={title} onClick = {this.onClick}>
                <i className='fa fa-home fa-2x icon' aria-hidden='true'></i><span className='header-text'>{title}</span>
            </span>
        );
    }

}

export default NavElement;
