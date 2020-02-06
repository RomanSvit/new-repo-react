import React, { Component } from 'react';
import axios from 'axios';
import Spinner  from '../../ui/spinner/Spinner'
import NewsArticles from './news-articles/NewsArticles'

class News extends Component {
  state = {
		articles: [],
		loading: true,
  };

  async componentDidMount() {
    console.log('componentDidMount');
    try {
      const data = await axios.get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-06&sortBy=publishedAt&apiKey=69ff0a0f004045cd8a562c93279c0e93'
      ); //.then(console.log) //вместо async/await

      const news = await data.data.articles;

      console.log(data.data.articles);
      this.setState({
        articles: news
      });
    } catch(error) {
			console.log(error);
		}
  }
  render() {
		const {articles, loading} =this.state;
		
		console.log('render');
		
    return (
		<>{loading && <Spinner/>}
		<NewsArticles data={articles} />
	
		</>)
  }
}

export default News;
