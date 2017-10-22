import React, { Component } from 'react';

class RouteDoc extends Component {
    constructor(props) {
        super();
    }

    render() { 
        return (
            <div>
                <div>URI</div><div>{this.props.uri}</div>
                <div>Methods</div><div>{this.props.methods}</div>
                <div>Description</div><div>{this.props.description}</div>
            </div>
        );
    }
}

export default RouteDoc;
