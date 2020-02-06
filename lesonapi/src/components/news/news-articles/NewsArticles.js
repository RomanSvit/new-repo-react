import React from 'react';
import NewsItem from '../news-item/NewsItem';
import shortId from 'shortid';

const NewsArticle = ({data}) => (
	<ul>
		{data.map(article=> {
			const transformArticle = {...article, id: shortId()};
			return <NewsItem key={transformArticle.id} {...transformArticle}/>})}
	</ul>
);

export default NewsArticle;