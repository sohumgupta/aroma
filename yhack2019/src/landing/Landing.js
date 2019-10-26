import React, { Component } from 'react';
import Header from '../components/Header';
import './Landing.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import LocationCarousel from '../components/location-carousel.js';
import Footer from '../components/footer.js';

export default class Landing extends Component {
	
	_handleKeyDown(e) {
    if (e.key === 'Enter') {
			alert("searching for location " + e.target.value);
    }
  }
	
  render() {
    return (
      <div className="body">
        <Header />
			
				<div className="who-we-are">
					<div className="who-we-are-title">who we are</div>
					<div className="who-we-are-content">
						Aroma helps you find personal, unique recommendations. Find the best mom & pop, hole-in-the-wall, deep cuts from the people who know them best, or share the experiences that you've had in your city.
					</div>
				</div>
				
				<div className="find-location">
					<div className="find-location-title">
						find a city
					</div>
					<input type="text" className="find-location-input" onKeyDown={this._handleKeyDown}/>
				</div>
				
				<h1 className="popular-cities">popular cities</h1>
				<LocationCarousel/>
				<Footer/>
      </div>
    );
  }
}