import React from 'react';
import './article-card.scss';
import { Redirect } from 'react-router-dom';

import Coffee from '../assets/coffee.jpg';

class ArticleCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favorited: false,
			redirectPage: false
		}
	}
	
	handleClick() {
		localStorage.setItem('title', this.props.title);
		this.setState(prevState => ({
			favorited: prevState.favorited, redirectPage: true
		}));
	}
	
	_switchFav(e) {
		this.setState(prevState => ({
			favorited: !prevState.favorited, redirectPage: false
		}));
	}


	/*
	tagClick(tagStr) {
		this.props.reRender(this.props.articles.filter(article => article.tags.includes(tagStr)));
	}*/
	
	render() {
		const tags = this.props.tags.map((tag) =>
			<div className="article-card-tag">{tag}</div>
		);
		
		const bgStyle = {
			backgroundImage: "url(" + this.props.image + ")",
		}
		
		if (this.state.redirectPage) {
			return (
				<Redirect to="/article"/>
			)
		} else {


				return (
				<div className={(this.props.big == "big") ? "article-card-big" : "article-card"}>
					<div style={bgStyle} className="article-card-image-wrapper" >
						<div className="article-card-tags">{tags}</div>
						<div onClick={this._switchFav.bind(this)} className={(this.state.favorited == true) ? "article-favorite fa fa-heart" : "article-favorite fa fa-heart-o"}></div>
					</div>
					<div className="all-tags">{}</div>
					<div className="article-card-content" onClick={this.handleClick.bind(this)}>
						<h1 className="article-card-title">{this.props.title}</h1>
						<h2 className="article-card-author">{this.props.author}</h2>
					</div>
				</div>
			);
		}
	}
	
	static defaultProps = {
		image: Coffee,
		author: "ryan kim",
		title: "haha omg title!!",
		tags: ["coffee", "calm", "cozy"]
	}
}

export default ArticleCard;