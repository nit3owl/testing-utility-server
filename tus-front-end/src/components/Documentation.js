import React, { Component } from 'react';
import RouteDoc from './RouteDoc';
import '../style/App.css';

class Documentation extends Component {

    constructor(props) {
        super();
        this.fetchRoutes = this.fetchRoutes.bind(this);
    }

    fetchRoutes() {
        let routes = [];
        //hardcode health value for testing
        routes.push(
            <RouteDoc
                key='0'
                uri='/health'
                methods='GET'
                description='A simple health endpoint to indicate that the server is up'
            />
        );

        return routes;
    }

    render() {
        let routes = this.fetchRoutes();
        return (
            <div>
                <div className='main'>
                    <div className='table'>
                        <div className='table-header'>
                            <span className='box column column-small'>Methods</span>
                            <span className='box column column-med'>URI</span>
                            <span className='box column column-med'>Description</span>
                        </div>
                        {routes}                
                    </div>
                </div>
            </div>

        );
    }
}

export default Documentation;
