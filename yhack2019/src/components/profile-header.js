import React, { Component } from 'react';
import './profile-header.scss';

import Coffee from '../assets/coffee.jpg';

export default class ProfileHeader extends Component {
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
			backgroundImage: "url(" + this.props.bgImage + ")"
		}
		
		const profPic = {
			backgroundImage: "url(" + this.props.picture + ")"
		}
		
    return (
      <div>
        <div className="ProfileHeader">
					<div className="navbar">
						<div className="logo">
							<p>aroma</p>
						</div>
						<input type="text" value={this.state.inputVal} onChange={(e) => {this.setState({inputVal: e.target.value})}} className="location-search" onKeyDown={this._handleKeyDown}/>	
						<div className="login">			
							<button className="login-button">logout</button>
						</div>
						<div className="profile-picture" style={profPic}>
						</div>
						<div className="profile-name">
							<p>{this.props.name}</p>
						</div>
					</div>
        </div>
      </div>
    );
  }
	
	static defaultProps = {
		picture: "https://images.squarespace-cdn.com/content/v1/59509048893fc0ee580fc306/1562036593641-Z0TPOFYWHQUO2FX7KDSK/ke17ZwdGBToddI8pDm48kAYL4NvDXtGPhTA_HR0UHOEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcvIvivBmmEjNJDh1pzCKzF4x7ot7jYBb7QyHHDnoB2ejCTN3jjH9RKfMxH1-VOTLh/website+0.jpg",
		bgImage: Coffee,
		name: "ryan kim"
	}
}