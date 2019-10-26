import React from 'react';
import './location-card.scss';

import Coffee from '../assets/coffee.jpg';

class LocationCardBig extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const bgStyle = {
			backgroundImage: "url(" + this.props.image + ")",
		}
		
		return (
			<div className="location-card-big">
				<div style={bgStyle} className="location-card-image-wrapper">
					<h1 className="location-card-title">{this.props.location}</h1>
				</div>
				<div className="location-card-content">
					<h1 className="location-card-subtitle">{this.props.subtitle}</h1>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
		image: Coffee,
		location: "boise, idaho",
		subtitle: "the city of trees",
	}
}

export default LocationCardBig;