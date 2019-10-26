import React from 'react';
import './location-card.scss';

import Coffee from '../assets/coffee.jpg';

class LocationCard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const bgStyle = {
			backgroundImage: "url(" + this.props.image + ")",
		}
		
		return (
			<div className="article-card">
				<div style={bgStyle} className="article-card-image-wrapper" >
				</div>
				<div className="article-card-content">
					<h1 className="article-card-title">{this.props.location}</h1>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
		image: Coffee,
		location: "boise, idaho",
	}
}

export default LocationCard;