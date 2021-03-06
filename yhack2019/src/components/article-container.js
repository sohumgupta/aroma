import React, { Component } from 'react';
import Header from './Header';
import './article-container.scss';
import ArticleCard from './article-card.js';
import LocationCard from './location-card.js';

class ArticleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		}
	}
	
	async componentWillMount() {
		const res = await fetch("http://localhost:9000/article?city=" + this.props.city);
 		const res_json = await res.json();
		this.setState({articles: res_json});
		console.log(this.state.articles);
		}
	
	render() {

		var bigArticles = [];
		if (this.state.articles.length >= 2) {
			bigArticles = [<ArticleCard big="big" articles={this.state.articles} author={this.state.articles[0].name} title={this.state.articles[0].title} tags={this.state.articles[0].tags}/>,
										  <ArticleCard big="big" articles={this.state.articles} author={this.state.articles[1].name} title={this.state.articles[1].title}  tags={this.state.articles[1].tags}/>]
		}
		var numSlice = 0;
		if (this.state.articles.length >= 2) {
			numSlice = 2;
		} else {
			numSlice = 0;
		}
		const allArticles = (this.state.articles.slice(numSlice, this.state.articles.length)).map((article) => <ArticleCard articles={this.state.articles} author={article.author} title={article.title} tags={article.tags}/>)
																																											 
		return (
			<div className="article-container">
				{bigArticles}
				{allArticles}
			</div>
		);
	}
}

export default ArticleContainer;