import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
					<div className="navbar">
						<div className="logo">
							<p>aroma</p>
						</div>
						<div className="login">
							<p>welcome, ryan</p>
						</div>
						<div className="banner-text">
							<p>can you smell the aroma in the room?</p>
							<p>bruh add more content here too!!!!!</p>
						</div>
					</div>
        </div>
      </div>
    );
  }
}