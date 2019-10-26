import React, { Component } from 'react';
import LocationHeader from '../components/location-header.js';
import './Location.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import LocationContainer from '../components/location-container.js';

export default class Location extends Component {
	
  render() {
    return (
      <div className="body">
        <LocationHeader />
				<LocationContainer/>
      </div>
    );
  }
}