import React, { Component } from 'react';
//import Drawing from './Drawing';

class DrawingsList extends Component {

	state={
    	className: 'active',
    	opened: false,
    	selected:''
	}

	toggleHidden = () => {
		this.setState({ opened: !this.state.opened})
	}


	showDrawing = () => {
		if (this.state.className === 'active') {
			this.setState({ className: 'inactive'})
		} else {
			this.setState({className: 'active'})
		}
	}

	render() {		
		return (

			<div className="drawings">

				{ this.props.drawings.map((item, i) => {
					return(
						<img
							key={i}
							src={ item.src }
							onClick={ this.toggleHidden}
							className="active"
						/>
							
	                		
						
					)
					{!this.state.opened && <img src={this.props.src} className="active"/>}
				})}
			</div>
		)
	}
}
export default DrawingsList;