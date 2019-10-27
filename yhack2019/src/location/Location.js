import React, { Component } from 'react';
import LocationHeader from '../components/location-header.js';
import './Location.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import ArticleContainer from '../components/article-container.js';
import Footer from '../components/footer.js';

import { withRouter } from "react-router";

export default class Location extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		this.setState ({
			cityname: localStorage.getItem('city')
		})
	}
	
  render() {
    return (
			<div className="body">
				<LocationHeader city={this.state.cityname}/>
				<ArticleContainer city={this.state.cityname}/>
				<Footer/>
			</div>
    );
  }
}