import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem.js';

class NewsList extends Component {
  render() {
    return (
      <div className="newsList">
        {this.props.data.map((item, index) => <NewsItem key={index} newsKey={index+1} newsId={item} />)}
      </div>
    );
  }
}

export default NewsList;