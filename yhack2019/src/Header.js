import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className ="Background-Color"></div>
        <div className ="Blurred-Image"></div>
        <div className="Header">
          <div className="logo">
            <p>aroma</p>
          </div>
          <div className="banner-text">
            <p>can you smell the aroma in the room?</p>
          </div>
          <div className="login">
            <p>welcome, ryan</p>
          </div>
        </div>
      </div>
    );
  }
}