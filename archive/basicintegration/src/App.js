import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: null };
	}
	
	callAPI() {
		fetch("http://localhost:9000/article?city=City%204")
			.then(res => res.json())
			.then(res => console.log(res));
	}
	
	async componentDidMount() {
		const response = await fetch(`http://localhost:9000/article?city=City%204`);
    const json = await response.json();
    this.setState({ apiResponse: json });
		console.log(this.state.apiResponse);
	}
	
	render() {
		
	}
  
}

export default App;
