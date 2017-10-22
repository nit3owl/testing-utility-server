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
                key = '0'
                url='/health' 
                methods='GET' 
                description='A simple health endpoint to indicate that the server is up' 
            />
        );

        return routes;
    }

    render() {
        let routes = this.fetchRoutes();
        return (
            <div className='body'>
                {routes}
            </div>
        );
    }
}

export default Documentation;
