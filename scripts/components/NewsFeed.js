import React from 'react';
import { Link, RouteHandler } from 'react-router';
import httpGet from '../helpers/http.js';

let NewsFeed = React.createClass({
	getInitialState: function() {
		return {news: []};
	},
	componentDidMount: function(){
		var self = this;
		httpGet('/assets/news.json', function(data){
			self.setState({ news: JSON.parse(data) });
		});
		// тут кеширование бы, чтобы каждый раз не скачивалось
	},
	render() {
		var news = this.state.news;
		return (
			<div className="wrapper">
				<div className="articles-list">
					{news.map(function(article) {
						return (
							<div className="article-link-wrapper">
								<Link to="news-feed-article" params={{articleId: article.id}}>{article.title}</Link>
							</div>
						)
					})}
				</div>
				<RouteHandler/>
			</div>
		);
	}
});

export default NewsFeed;