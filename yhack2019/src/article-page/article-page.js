import React from 'react';
import './article-page.css';

class ArticlePage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="body">
				<h1 className="title">{this.props.title}</h1>
				<h2 className="author">{this.props.author}</h2>
				<h3 className="location">{this.props.location}</h3>
				<div className="content">{this.props.content}</div>
			</div>
		);
	}
	
	static defaultProps = {
		title: "haha omg title!!",
		location: "boise, id",
		author: "ryan h. kim",
		content: <p>yooo this is the content</p>
	}
}

export default ArticlePage;