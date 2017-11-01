import React, { Component } from 'react';

class RouteDoc extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className='wrapper table-row'>
                <div className='column column-small'>{this.props.methods}</div>
                <div className='column column-small'>{this.props.uri}</div>
                <div className='column column-large'>{this.props.description}</div>
                <div className='column column-med'>{this.props.params}</div>
            </div>
        );
    }
}

export default RouteDoc;
