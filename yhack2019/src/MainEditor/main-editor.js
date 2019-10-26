import React from 'react';
import './main-editor.css';
import Header from '../Header'
import { Dante, convertToRaw } from "Dante2";

class MainEditor extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      value: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (editor) => {
    // console.log(editor);
    console.log(editor.state.editorState);
    // const contentState = editor.state.editorState.getCurrentContent();
    // console.log(convertToRaw(contentState));
  }
	
  handleSubmit = (event) => {
    // const contentState = this.state.editor.getCurrentContent();
    // this.setState({ value: JSON.stringify(convertToRaw(contentState)) });
    alert('An article was submitted: ' + this.state.value);
  }
	
  render() {
		return(
        <div className="content">
          <div className="dante-container">
            <Dante onChange={this.onChange} />
          </div>
          <div className="submit-container">
            <input onClick={this.handleSubmit} className="submit-button" type="submit" value="submit" />
          </div>
        </div>
		);
  }
}

export default MainEditor;