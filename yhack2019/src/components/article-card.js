import React from 'react';
import './article-card.scss';

import Coffee from '../assets/coffee.jpg';

class ArticleCard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const tags = this.props.tags.map((tag) =>
			<div className="article-card-tag">{tag}</div>
		);
		
		const bgStyle = {
			backgroundImage: "url(" + this.props.image + ")",
		}
		
		return (
			<div className={(this.props.big == "big") ? "article-card-big" : "article-card"}>
				<div style={bgStyle} className="article-card-image-wrapper" >
					<div className="article-card-tags">{tags}</div>
				</div>
				<div className="article-card-content">
					<h1 className="article-card-title">{this.props.title}</h1>
					<h2 className="article-card-author">{this.props.author}</h2>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
		image: Coffee,
		author: "ryan kim",
		title: "haha omg title!!",
		tags: ["coffee", "calm", "cozy"]
	}
}

export default ArticleCard;