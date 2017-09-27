import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTopPostIds} from '../actions';
import {fetchPost} from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchTopPostIds();
  }

  renderPost(post) {
    return (
      <li key={post.id}>
        {post.title}
      </li>
    );
  }

  render() {
    console.log(this.props.posts.length);
    console.log(this.props.posts);
    // got the top post ids but not the posts
    if (this.props.topIds != null && this.props.posts.length === 0) {
      this.props.topIds.slice(0, 30).map(postId => {
        return this.props.fetchPost(postId);
      });
    }
    return (
      <ul>
        {this.props.posts.map(this.renderPost)}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTopPostIds: fetchTopPostIds,
    fetchPost: fetchPost
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    topIds: state.topIds,
    posts: state.posts,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);