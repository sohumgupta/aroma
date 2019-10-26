import React, { Component } from 'react';
import Header from './Header';
import './Landing.scss';
import ArticleCard from './components/article-card.js';
import LocationCard from './components/location-card.js';

class AllArticles extends Component {
	render() {
		return (
			<div className="carousel">
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

class AllLocations extends Component {
	render() {
		return (
			<div className="carousel">
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
				<LocationCard />
			</div>
		)
	}
}

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
      <div>
        <Header />
				<FindLocation />
				<hr className="divider"/>
				<AllLocations/>
      </div>
    );
  }
}