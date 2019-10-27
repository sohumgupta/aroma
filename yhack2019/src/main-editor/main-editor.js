import React from 'react';
import './main-editor.scss';
import '../components/editor-header.scss';
import Dante from 'Dante2';
import axios from 'axios';

class MainEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      editorBlocks: [],
      value: "",
      title: "",
      author: "",
      city: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
	
	async publishArticle() {	
		axios.post('http://localhost:9000/article', {
			title: this.state.title,
			name: this.state.author,
			city: this.state.city,
			text: this.state.value
		})
		.then(function (response) {
										 console.log(response);
										 })
		.catch(function (error) {
											console.log(error);
											});
	}
  
  async handleSubmit(event) {
    this.state.value = this.state.editorBlocks.reduce((acc, x) => acc + x.text + "\n", "");
		this.publishArticle();
  }

  concatValue = (inText) => {
    this.setState ({
      value: this.state.value + "hello" + inText
    })
  }

  updateEditor = (newBlocks) => {
    this.setState ({
      editorBlocks: newBlocks
    })
  }

  updateTitle = (evt) => {
    this.setState ({
      title: evt.target.value
    })
  }

  updateAuthor = (evt) => {
    this.setState ({
      author: evt.target.value
    })
  }

  updateCity = (evt) => {
    this.setState ({
      city: evt.target.value
    })
  }
	
  render() {
		return(
      <div className="editor-page-container">
        <div className="editor-header">
					<div className="editor-navbar">
						<div className="editor-logo">
							<p>aroma</p>
						</div>
						<div className="editor-login">
							<button className="editor-login-button">log in</button>
						</div>
						<div className="editor-banner-text">
							<input value={this.state.title} onChange={evt => this.updateTitle(evt)} type="text" placeholder="article title"></input>
              <input value={this.state.city} onChange={evt => this.updateCity(evt)} type="text" placeholder="city"></input>
              <input value={this.state.author} onChange={evt => this.updateAuthor(evt)} type="text" placeholder="your name!"></input>
						</div>
					</div>
        </div>
        <div className="content">
          <div className="dante-container">
            <Dante className="text" onChange={(editor) => 
            this.updateEditor(editor.emitSerializedOutput().blocks)} 
            // console.log(editor.emitSerializedOutput().blocks)}
            />
          </div>
          <div className="submit-container">
            <input onClick={this.handleSubmit} className="submit-button" value="publish" />
          </div>
        </div>
      </div>
		);
  }
}

export default MainEditor;