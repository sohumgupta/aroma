import React from 'react';
import './main-editor.scss';
import Dante from 'Dante2';
import EditorHeader from '../components/editor-header';


class MainEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      editorBlocks: [],
      value: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
	
  async handleSubmit(event) {
    this.state.value = this.state.editorBlocks.reduce((acc, x) => acc + x.text + "\n", "");
    console.log(this.state.value);
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
	
  render() {
		return(
      <div className="editor-page-container">
        <EditorHeader />
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
        {this.state.value}
      </div>
		);
  }
}

export default MainEditor;