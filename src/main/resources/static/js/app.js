import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Topbar
import Topbar from './components/topbar.jsx';

// Components to be handled by the router
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

const Top = document.getElementById('topbar');
const App = document.getElementById('react');


ReactDOM.render(<Topbar />, Top);

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}></Route>
		<Route path="about" component={About}></Route>
		<Route path="contact" component={Contact}></Route>
	</Router> 
,App);