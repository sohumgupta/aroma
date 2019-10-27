import React from 'react';
import './App.css';
import Landing from './landing/Landing';
import Location from './location/Location';
import MainEditor from './main-editor/main-editor.js';


import {
  BrowserRouter,
  Switch,
  Route,
	Redirect,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
	
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Switch>

					<Route exact path="/" component={Landing}/>
					<Route exact path="/location" component={Location} />
					<Route exact path="/editor" component={MainEditor} />
					<Route component={Landing}/>

					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
