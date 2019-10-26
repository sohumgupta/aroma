import React, { Component } from 'react';
import Header from './Header';
import './article-container.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class ArticleContainer extends Component {
	
	render() {
		return (
			<div className="article-container">
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

export default ArticleContainer;