import React from 'react';
import './add-city.scss';
import '../components/editor-header.scss';
import Dante from 'Dante2';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddCity extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
	      city: "",
	      subtitle: "",
	      image: "",
	    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
	
	async publishCity() {	
		axios.post('http://localhost:9000/city', {
			city: this.state.city,
			subtitle: this.state.subtitle,
			image: this.state.image,
		})
		.then(function (response) {
										 console.log(response);
										 })
		.catch(function (error) {
											console.log(error);
											});
	}
  
  async handleSubmit(event) {
  		console.log(this.state.city);
  		console.log(this.state.subtitle);
  		console.log(this.state.image);
		this.publishCity();
  }

  updateCity = (evt) => {
    this.setState ({
      city: evt.target.city
    })
  }

  updateSubtitle = (evt) => {
    this.setState ({
      subtitle: evt.target.subtitle
    })
  }

  updateImage = (evt) => {
    this.setState ({
      image: evt.target.image
    })
  }
	
  render() {
		return(
				<div className="editor-page-container">
					<div className="editor-header">
						<div className="editor-navbar">
							<div className="editor-logo">
								<Link to="/" style={{textDecoration: "none"}}><p>aroma</p></Link>
							</div>
							<div className="editor-login">
								<Link to="/editor"><button className="add-article-button">post article</button></Link>
								<Link to="/addcity"><button className="add-city-button">add city</button></Link>
								<button className="editor-login-button">log in</button>
							</div>
							<div className="editor-banner-text">
								add a city
							</div>
						</div>
						<div className="add-city-inputs">
								<input className="name-input" value={this.state.city} onChange={evt => this.updateCity(evt)} type="text" placeholder="city name"></input>
								<input className="subtitle-input" value={this.state.subtitle} onChange={evt => this.updateSubtitle(evt)} type="text" placeholder="city motto"></input>
								<input className="image-input" value={this.state.image} onChange={evt => this.updateImage(evt)} type="text" placeholder="image url"></input>
								<input onClick={this.handleSubmit} className="submit-button" value="publish" />
						</div>
					</div>
				</div>
		);
  }
}

export default AddCity;