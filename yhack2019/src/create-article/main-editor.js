import React from 'react';
import './main-editor.css';

import {
  Editor,
  createEditorState,
} from 'medium-draft';

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
				<form onSubmit={this.handleSubmit}>
						<textarea className="text" value={this.state.value} onChange={this.handleChange}>
						</textarea>
						<br/>
						<input type="submit" value="submit" />
				</form>
			</div>
		);
  }
}

export default MainEditor;