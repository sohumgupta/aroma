import React from 'react';
import './article-page.scss';
import '../components/article-header.scss';
import Dante from 'Dante2';


class ArticlePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      editorBlocks: [],
      value: "Hello my name is Hello my name is  Hello my name is  Hello my name is  Hello my name is  Hello my name is ",
      title: "Playboi Carti",
      author: "Self TItled",
      city: "Providence",
    };
  }
  

  componentDidMount() {

  }
	
  render() {
		return(
      <div className="article-page-container">
        <div className="article-header">
					<div className="article-navbar">
						<div className="article-logo">
							<p>aroma</p>
						</div>
						<div className="article-login">
							<button className="article-login-button">log in</button>
						</div>
						<div className="article-banner-text">
              <input value={this.state.title} type="text" readOnly></input>
              <input value={this.state.city} type="text" readOnly></input>
              <input value={this.state.author} type="text" readOnly></input>
						</div>
					</div>
        </div>
        <div className="content">
          <div className="dante-container">
            <p>
              {this.state.value}
              {this.state.value}
              {this.state.value}
              {this.state.value}
            </p>
          </div>
        </div>
      </div>
		);
  }
}

export default ArticlePage;