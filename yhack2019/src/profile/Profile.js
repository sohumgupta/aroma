import React, { Component } from 'react';
import ProfileHeader from '../components/profile-header.js';
import './Profile.scss';
import ArticleCard from '../components/article-card.js';
import LocationCard from '../components/location-card.js';
import ArticleCarousel from '../components/article-carousel.js';
import LocationCarousel from '../components/location-carousel.js';
import ArticleContainer from '../components/article-container.js';
import Footer from '../components/footer.js';

export default class Location extends Component {
	
  render() {
    return (
      <div className="body">
        <ProfileHeader />
					
				<h1 className="your-cities">your cities</h1>
				<LocationCarousel/>
			
				<h1 className="your-articles">your articles</h1>
				<ArticleCarousel/>
			
				<h1 className="your-favorites">your favorites</h1>
				<ArticleCarousel/>
			
				<Footer/>
      </div>
    );
  }
}