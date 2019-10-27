import React, { Component } from 'react';
import Header from '../components/Header';
import './Landing.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import LocationCarousel from '../components/location-carousel.js';
import Footer from '../components/footer.js';
import { Redirect } from 'react-router-dom';

export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state={
			city: "",
			changePage: false
		}
	}
	
	handleChange(e) {
		this.setState({city: e.target.value, changePage: false});
	}
	
	_handleKeyDown(e) {
    if (e.key === 'Enter') {
			localStorage.setItem('city', this.state.city);
			this.setState({city: this.state.city, changePage: true});
    }
  }
	
  render() {
		if (this.state.changePage == true) {
			console.log(this.state.city);
			return (<Redirect to={{pathname: '/location'}}/>);
		} else {
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
							<input type="text" onChange={this.handleChange.bind(this)} value={this.state.city} className="find-location-input" onKeyDown={this._handleKeyDown.bind(this)}/>
					</div>

					<h1 className="popular-cities">popular cities</h1>
					<LocationCarousel/>
					<Footer/>
				</div>
			);
		}
  }
}