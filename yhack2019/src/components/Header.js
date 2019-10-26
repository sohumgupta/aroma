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
							<p>log in</p>
						</div>
						<div className="banner-text">
							<p>Cities can feel inhuman sometimes.<br/>Let aroma help.</p>
						</div>
					</div>
        </div>
      </div>
    );
  }
}