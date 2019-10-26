import React, { Component } from 'react';
import Header from '../components/Header';
import './Landing.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import LocationCarousel from '../components/location-carousel.js';

class FindLocation extends Component {
	_handleKeyDown(e) {
    if (e.key === 'Enter') {
      alert("searching for location " + e.target.value);
    }
  }
	
	render() {
		return (
			<div className="find-location">
				<div className="find-location-text">
					find a city
				</div>
				<input type="text" className="find-location-input" onKeyDown={this._handleKeyDown}/>
			</div>
		);
	}
}

export default class Landing extends Component {
  render() {
    return (
      <div className="body">
        <Header />
			
				<div className="who-we-are">
					<div className="who-we-are-title">who we are</div>
					<div className="who-we-are-content">
						Aroma helps you find personal, unique recommendations.
					</div>
				</div>
			
				<FindLocation />
				<LocationCarousel/>
      </div>
    );
  }
}