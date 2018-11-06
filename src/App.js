import React, { Component } from 'react';
import logo from './logo.svg';
import dandelion from './dandelion_01.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="layout_nav">
          <a href="">About me</a>
          <a href="">Photography</a>
          <a href="">Contact</a>
        
          <button>
            <i className="fa fa-bars">&#9776;</i>
          </button>
        </nav>
        <div className="main">



          <div className="layout_header">
            <header className="App-header">
             
              <h1 className="App-title">Things are not what they seem nor are they otherwise.</h1>
               <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <div className="layout_photo">
            <img src={dandelion} className="photo" alt="dandelion photo"/>
          </div>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
