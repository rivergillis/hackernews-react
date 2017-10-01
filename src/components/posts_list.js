import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago'
import {fetchTopPostIds} from '../actions';
import {fetchPost} from '../actions';

class PostsList extends Component {
  constructor(props) {
    super(props);

    this.renderPost = this.renderPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchTopPostIds();
  }

  renderPost(postId) {
    const post = this.props.posts[postId];
    return (
      <div key={post.id}>
        <li>
          <Link to={`/story/${post.id}`}>
            {post.title}
          </Link>
        </li>
        <span>{post.score} points by {post.by} <TimeAgo date={post.time * 1000} /> | {post.descendants} comments</span>
      </div>
    );
  }

  render() {
    // got the top post ids but not the posts
    if (this.props.topIds != null && _.isEmpty(this.props.posts)) {
      this.props.topIds.slice(0, 30).map(postId => {
        return this.props.fetchPost(postId);
      });
    }

    // wait until we have all of the posts
    if (_.size(this.props.posts) < 30) {
      return (
        <div></div>
      );
    }

    return (
      <ul>
        {this.props.topIds.slice(0, 30).map(this.renderPost)}
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