import React, { Component } from 'react';
import Header from './Header';
import './location-container.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';
import LocationCardBig from './location-card-big.js';

class LocationContainer extends Component {
	
	render() {
		return (
			<div className="location-container">
				<LocationCardBig />
				<LocationCardBig />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
			</div>
		)
	}
}

export default LocationContainer;