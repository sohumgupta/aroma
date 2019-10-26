import React, { Component } from 'react';
import Header from './Header';
import './location-container.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class LocationContainer extends Component {
	
	render() {
		return (
			<div className="location-container">
				<ArticleCard big="big" />
				<ArticleCard big="big" />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</div>
		)
	}
}

export default LocationContainer;