import React, { Component } from 'react';
import Header from './Header';
import './article-carousel.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class ArticleCarousel extends Component {
	render() {
		return (
			<div className="carousel">
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

export default ArticleCarousel;