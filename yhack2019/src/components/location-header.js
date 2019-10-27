import React, { Component } from 'react';
import './location-header.scss';
import { Link } from 'react-router-dom';

import Coffee from '../assets/coffee.jpg';

export default class LocationHeader extends Component {
	state = {
		inputVal: "find a city..."
	}
	
	_handleKeyDown(e) {
    if (e.key === 'Enter') {
			alert("searching for location " + e.target.value);
    }
  }
	
  render() {
		const bgImage = {
			backgroundImage: "url(" + this.props.image + ")"
		}
		
    return (
      <div>
        <div className="LocationHeader">
					<div className="navbar">
						<div className="logo">
							<Link to="/" style={{textDecoration: "none"}}><p>aroma</p></Link>
						</div>
						<input type="text" value={this.state.inputVal} onChange={(e) => {this.setState({inputVal: e.target.value})}} className="location-search" onKeyDown={this._handleKeyDown}/>	
						<div className="login">			
							<Link to="/editor"><button className="add-article-button">post article</button></Link>
							<Link to="/editor"><button className="add-city-button">add city</button></Link>
							<button className="login-button">log in</button>
						</div>
						<div className="location-title">
							<p>{this.props.city}</p>
						</div>
					</div>
        </div>
      </div>
    );
  }
	
	static defaultProps = {
		image: Coffee
	}
}