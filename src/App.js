import React, { Component } from 'react';
import DrawingsList from './DrawingsList'

import dandelion from './img/dandelion_01.jpg';
import me01 from './img/moi_01.jpg'
import me02 from './img/moi_02.jpg'
import me03 from './img/moi_03.jpg'
import me04 from './img/moi_04.jpg'
import drawing01 from './drawing/drawing01.png'
import drawing02 from './drawing/drawing02.png'
import drawing03 from './drawing/drawing03.png'
import drawing04 from './drawing/drawing04.png'
import wreth from './wreth.png'

import './App.css';

class App extends Component {
  state = {
    collage: [
      { src:me01, alt: 'portrait photo number 1' },
      { src:me02, alt: 'portrait photo number 2' },
      { src:me03, alt: 'portrait photo number 3' },
      { src:me04, alt: 'portrait photo number 4' }
    ],
    drawings: [
      { src:drawing01 }, {src:drawing02}, {src:drawing03}, {src:drawing04}
    ],
    className: 'active',
    opened: false
  }
    toggleHidden = () => {
    this.setState({ opened: !this.state.opened})
  }
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

          <div  className="layout_box item3">
          <h2>Skills</h2>
          <h3>Web Development:</h3>
            <ul>
              <li>HTML <i className="fa fa-square-o"></i><i className="fa fa-square-o"></i><i className="fa fa-square-o"></i><i class="fa fa-square"></i></li>
              <li>HTML Canvas</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Jasmine</li>
              <li>jQuery</li>
              <li>React</li>
              <li>API</li>
              <li>RWD</li>
              <li>ARIA</li>
              <li>Git</li>
            </ul>
            
            <h3>Graphic Design:</h3>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
              </ul>

          </div>


          <div className="layout_box collage">

            <img src={me01} className="photo1"/>
            <img src={drawing01} className="drawing1"/>

            <img src={me02} className="photo2"/>
            <img src={drawing02} className="drawing2"/>

            <img src={me03} className="photo3"/>
            <img src={drawing03} className="drawing3"/>

            <img src={me04} className="photo4"/>
            <img src={drawing04} className="drawing4"/>

            
          </div> 
        </div> 

      </div>
    )
  }
}

export default App;
