import React, { Component } from 'react';
import logo from './logo.svg';
import dandelion from './dandelion_01.jpg';
import wreth from './wreth.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={wreth} className="back_graphic" alt="floral wreth" /> 

        <h1 className="layout_name">Jowita Stachowiak Front-End Developer</h1>
        <nav className="layout_nav">
          <a href="">About me</a>
          <a href="">Photography</a>
          <a href="">Contact</a>
        
          <button>
            <i className="fa fa-bars">&#9776;</i>
          </button>
        </nav>

        <div className="grid_container">

          <div className="layout_box">
            <img src={dandelion} className="item1" alt="dandelion photo"/>
          </div>

          <div className="layout_box item2"> Things are not what they seem nor are they otherwise.
          </div>

          <div className="layout_box"> 3
          </div>


          <div className="layout_box"> 4
          </div>

        </div>

        <div className="main">

          <div className="layout">

            <div className="layout_text">             
              <h1 className="App-title">Things are not what they seem nor are they otherwise.</h1>
               
            </div>
          </div>


          
          <div className="layout">



          </div>

          <div className="layout">
            <div className="layout_text">             
              <h1 className="App-title">Things are not what they seem nor are they otherwise.</h1>
               
            </div>
          </div>

        </div>

        <p className="App-intro"></p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
