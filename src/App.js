import React, { Component } from 'react';
//import Message from './Message'

import logo from './logo.svg';
import dandelion from './dandelion_01.jpg';
import portrait from './js_medium.jpg'
import wreth from './wreth.png'

import './App.css';

class App extends Component {
  state = {
    textON: false,
    collage: []
  }

  componentDidMount(){
    this.handleMouseOver();
    this.handleMouseOut();
  }

  //functions to handle mouse over and out
  handleMouseOver = () => {
    const textIsOff = this.state.textON;
    this.setState({ textON: !textIsOff })
  }
  handleMouseOut = () => {
    const textIsOn = this.state.textON;
    this.setState({ textON: !textIsOn })
  }


  //function to create collage of portrait photos
  createCollage = () => {
      
    

    for (let i=0; i<4; i++){
          
      const portraitImage = (
        <div key={i}>
          <img 
            src={portrait}
            id="photo" 
            className="collage_item" 
            alt="portrait photo"         
          />
          
        </div>
      )

      this.state.collage.push(portraitImage);
    }

    return this.state.collage;
  }

  createText = () => {
      let text = [];

      const clickText = (<p className="textON">{this.state.textON? '' : 'click'}</p>)
      text.push(clickText)
      return text;
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


          <div 
            className="layout_box collage"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            { this.createCollage() }
            { this.createText() }

          </div>

        </div>

        <p className="App-intro"></p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
