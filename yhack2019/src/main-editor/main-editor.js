import React from 'react';
import './main-editor.scss';
import Dante from 'Dante2';


class MainEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An article was submitted: ' + this.state.value);
  }
	
  render() {
		return(
			<div className="content">
        <div className="dante-container">
          <Dante className="text" onChange={() => console.log("hello")} />
        </div>
        <div className="submit-container">
          <input className="submit-button" value="submit" />
        </div>
			</div>
		);
  }
}

export default MainEditor;