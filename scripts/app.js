import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';

import '../styles/styles.styl';

import NewsFeed from './components/NewsFeed.js';
import NewsFeedArticle from './components/NewsFeedArticle.js';
import About from './components/About.js';


let App = React.createClass({
	render() {
		return (
			<div className="wrapper">
				<nav>
					<Link to="news-feed">News feed</Link>
					<Link to="about">About us</Link>
				</nav>
				<div className="content">
					<RouteHandler/>
				</div>
			</div>
			// А есть способ здесь вернуть больше одной ноды? А то так врапперов много расплодиться может.
		);
	}
});

let routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="news-feed" path="/" handler={NewsFeed}>
			<Route name="news-feed-article" path="/article/:articleId" handler={NewsFeedArticle}/>
		</Route>
		<Route name="about" path="/about" handler={About}></Route>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});