import React, { Component } from 'react';
import Header from './Header';
import './location-carousel.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class LocationCarousel extends Component {
	render() {
		return (
			<div className="carousel">
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

export default LocationCarousel;