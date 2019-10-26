import React, { Component } from 'react';
import './location-header.scss';

import Coffee from '../assets/coffee.jpg';

export default class LocationHeader extends Component {
	
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
							<p>aroma</p>
						</div>
						<input type="text" className="location-search" onKeyDown={this._handleKeyDown}/>	
						<div className="login">			
							<button className="login-button">log in</button>
						</div>
						<div className="location-title">
							<p>Boise, Idaho</p>
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