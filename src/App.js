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

          <div className="layout_box"> 3
          </div>


          <div className="layout_box collage">
            { this.state.collage.map(photo => {

              return (
                <img
                  key={ photo.id }
                  src={ photo.src }
                  alt={ photo.alt }
                  className="collage_item"

                />
              )

            })}

           <div className="drawings">

            { this.state.drawings.map((item, i) => {
              return(
                <img
                  key={i}
                  src={ item.src }
                  onClick={ this.toggleHidden}
                  className="active"
                />                   
            
              )
            {!this.state.opened && <img src={item.src} className="active"/>}
            })}
           </div>
          </div>
        </div>        
      </div>
    )
  }
}

export default App;
