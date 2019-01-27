import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './routes/home.js';
import About from './routes/about.js';
import Contact from './routes/contact.js';

export default () => (
	<Router>
		<div>
			<nav>
				<NavLink to="/" exact>Home</NavLink>
				<NavLink to="/about/">About</NavLink>
				<NavLink to="/contact/">Contact</NavLink>
			</nav>

			<Route path="/" exact component={Home} />
			<Route path="/about/" component={About} />
			<Route path="/contact/" component={Contact} />
		</div>
	</Router>
);