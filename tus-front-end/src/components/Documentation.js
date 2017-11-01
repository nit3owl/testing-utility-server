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
                params=''
            />
        );
        routes.push(
            <RouteDoc
                key='1'
                uri='/dummy/random/int'
                methods='GET'
                description='Returns a random int between 0 and 100'
                params='number - min; number - max'
            />
        );

        return routes;
    }

    render() {
        let routes = this.fetchRoutes();
        return (
            <div className='column-large'>
                <div className='wrapper table-header'>
                    <span className='column column-small'>Methods</span>
                    <span className='column column-small'>URI</span>
                    <span className='column column-large'>Description</span>
                    <span className='column column-med'>Params</span>
                </div>
                {routes}
            </div>

        );
    }
}

export default Documentation;
