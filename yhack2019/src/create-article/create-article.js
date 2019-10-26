import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import MainEditor from './main-editor.js';

class CreateArticlePage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<h1>Edit Your Article Here</h1>
				<MainEditor/>
			</div>
		);
	}
	
}

export default CreateArticlePage;