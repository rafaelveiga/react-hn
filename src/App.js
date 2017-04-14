import React, { Component } from 'react';
import NewsList from './NewsList/NewsList.js';
import AppHeader from './AppHeader/AppHeader.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: []
    }
  }

  componentWillMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(data => data.json())
      .then(data => {
        this.setState({
          newsList: data.slice(0,10)
        })
      });
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <AppHeader />
            <NewsList data={this.state.newsList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
