import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import Message from './components/Message';
import './style/App.css';
import './style/font-awesome-4.7.0/css/font-awesome.min.css'

const panels = {
    'home': <Message message='Under Construction!' />,
    'documentation': <Documentation />
}

class App extends Component {

    constructor() {
        super();
        this.state = ({ activePanel: panels['home'] });
        this.displayPanel = this.displayPanel.bind(this);
    }

    displayPanel(e) {
        let id = e.currentTarget.id;
        if (id !== undefined)
            id = id.trim().toLowerCase();

        console.log(id + ' was clicked');

        let panel = panels[id];
        if (panel === undefined)
            panel = <Message className='column-large'/>

        this.setState({ activePanel: panel });
    }

    render() {
        let panel = this.state.activePanel;

        return (
            <div>
                <Header onClick={this.displayPanel} />
                <div className='wrapper'>
                    <div className='sidebar'>left sidebar</div>
                    {panel}
                    <div className='sidebar'>right sidebar</div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
