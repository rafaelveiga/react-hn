import React, { Component } from 'react';

class AppHeader extends Component {
  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1>ReactHN <small>Lorem ipsum dolor sit amet.</small></h1>
        <hr/>
      </div>
    )
  }
}

export default AppHeader;