import React, { Component } from 'react';
import logo from './logo.svg';
import dandelion from './dandelion_01.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="layout_header">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Jowita Stachowiak</h1>
              
            </header>
          </div>
          <div className="layout_photo">
            <img src={dandelion} className="photo" alt="dandelion photo"/>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
