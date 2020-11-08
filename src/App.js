import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" style={ stylesApp }>
          <div class="col-md-6">
            <CreatePost />
          </div>
          <div class="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
