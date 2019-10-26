import React, { Component } from 'react';
import './editor-header.scss';

export default class EditorHeader extends Component {
  render() {
    return (
      <div>
        <div className="editor-header">
					<div className="editor-navbar">
						<div className="editor-logo">
							<p>aroma</p>
						</div>
						<div className="editor-login">
							<button className="editor-login-button">log in</button>
						</div>
						<div className="editor-banner-text">
							<input type="text" placeholder="Article Title"></input>
              <input type="text" placeholder="Short Description"></input>
						</div>
					</div>
        </div>
      </div>
    );
  }
}