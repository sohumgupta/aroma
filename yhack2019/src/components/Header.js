import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

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
							<Link to="/editor"><button className="add-article-button">post article</button></Link>
							<Link to="/addcity"><button className="add-city-button">add city</button></Link>
							<button className="login-button">log in</button>
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