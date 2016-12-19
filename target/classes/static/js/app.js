import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Topbar
import Topbar from './components/topbar.jsx';

// Components to be handled by the router
import Home from './components/home.jsx';

const Top = document.getElementById('topbar');
const App = document.getElementById('react');


ReactDOM.render(<Topbar />, Top);

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home}></Route>
	</Router> 
,App);