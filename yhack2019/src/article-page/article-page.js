import React from 'react';
import './article-page.scss';
import '../components/article-header.scss';
import Dante from 'Dante2';


class ArticlePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      value: "",
      title: "",
      author: "",
      city: "",
			image: "https://livability.com/sites/default/files/BoiseID-IDStateCapitol.jpg"
    };
  }
  
  async componentWillMount() {
		const title = localStorage.getItem('title');
		const res = await fetch("http://localhost:9000/article?title=" + title);
		const res_json = await res.json();
		console.log(res_json);
		this.setState({title: res_json[0].title, author: res_json[0].name, value: res_json[0].text, city: res_json[0].city});
	}
	
  render() {
		
		const bgImage = {
			backgroundImage: "url(" + this.state.image + ")"
		}
		
		return(
      <div className="article-page-container">
        <div className="article-header" style={bgImage}>
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