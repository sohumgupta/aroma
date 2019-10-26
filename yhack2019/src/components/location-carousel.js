import React, { Component } from 'react';
import Header from './Header';
import './location-carousel.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class LocationCarousel extends Component {
	
	componentDidMount() {
		const carousels = document.getElementsByClassName("carousel");
		const numcarousels = carousels.length
		for (let i = 0; i < numcarousels; i++) {
			carousels[i].scrollLeft = 170;
		}
	}
	
	render() {
		return (
			<div className="carousel">
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

export default LocationCarousel;