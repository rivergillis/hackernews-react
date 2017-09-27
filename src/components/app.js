import React, { Component } from 'react';
import '../styles/App.css';
import PostsList from './posts_list';

class App extends Component {
  render() {
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

export default App;
