import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// Components to be handled by the router
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

const App = document.getElementById('react');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}></Route>
		<Route path="about" component={About}></Route>
		<Route path="contact" component={Contact}></Route>
	</Router> 
,App);