import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super();
    }

    render() {
        let message;
        if(this.props.message !== undefined)
            message = this.props.message;
        else
            message = 'Whoops! Something went wrong...';

        return (
            <div className='body temp-message'>
               {message}
            </div>
        );
    }
}

export default Message;
