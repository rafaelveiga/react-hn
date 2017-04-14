import React, { Component } from 'react';

class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: {}
    }
  }

  componentWillMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.newsId}.json?print=pretty`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          news: data
        })
      })
  }

  render() {
    const itemDate = new Date(this.state.news.time*1000);
    const commentCount = this.state.news.kids ? this.state.news.kids.length : 0;

    return (
      this.state.news.hasOwnProperty('title') ?
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="media">
          <div className="media-left">
            <a href="#">
              {this.props.newsKey}
            </a>
          </div>

          <div className="media-body">
            <a href={this.state.news.url} target="_blank">
              <h4 className="media-heading">{this.state.news.title}</h4>
              <small>
                (vice.com) <br/>
              </small>
            </a>
            <small>
                <a href={this.state.news.url}>{this.state.news.score} points by hourislate at {itemDate.toLocaleString()}</a> | <a href="#">hide</a> | <a href="#">{commentCount} comments</a>
            </small>
          </div>

          <hr/>
        </div>
      </div>
      : null
    )
  }
}

export default NewsItem;