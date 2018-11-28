import React, { Component } from 'react';

class Drawing extends Component {


	state={
    	className: 'active',
    	opened: false,
	}

	toggleHidden = () => {
		this.setState({ opened: !this.state.opened})
	}

	updateDrawing = () => {
		if (this.state.className === 'active') {
			this.setState({ className: 'inactive'})
		} else {
			this.setState({className: 'active'})
		}
	}

	render() {		
		return (		

			<div className="drawing"
            	
            	onClick={ this.toggleHidden}
            >	
            {!this.state.opened && <img src={this.props.src} className="active"/>}		
            </div>
		)
	}
}
export default Drawing;