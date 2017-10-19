import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='temp-message'>
          Under Construction!
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
