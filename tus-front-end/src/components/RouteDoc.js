import React, { Component } from 'react';

class RouteDoc extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div className='box column column-small'>{this.props.methods}</div>
                <div className='box column column-med'>{this.props.uri}</div>
                <div className='box column column-med'>{this.props.description}</div>
            </div>
        );
    }
}

export default RouteDoc;
