import React from 'react';
import Router from 'react-router';
import _ from 'lodash';

let NewsFeedArticle = React.createClass({
	mixins: [Router.State],
	render() {

		var article = _.find(this._owner._owner.state.news, {id: this.getParams().articleId*1})
		// Мде..
		// Это эдинственный способ добраться до state родителя в react-router, или я что-то нее понимаю?
		// Всего лишь хотел передать article в дочерний route.

		if(!article){
			return <div></div>;
		}
		// И эта проверка смущает.. О таких вещах должен сам роутер заботиться, по идее.
		// Это туда же, к вопросу о наличии/доступности данных для рендеринга.
		// Возможно, я просто пытаюсь идти путем ангуляра, и здесь надо как-то по-другому.

		function createMarkup(htmlString) {
			return {__html: article.content};
			// тут по как-то untaint'ить данные надо
		};

		return (
			<div className="article">
				<h2>{article.title}</h2>
				<div className="article-content" dangerouslySetInnerHTML={createMarkup()}></div>
			</div>
		);
	}
});

export default NewsFeedArticle;