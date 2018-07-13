import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link className="list-link" to={`/posts/${post.id}`}>
            <p className="list-link-title">{post.title}</p>
            <span className="list-link-topic">{post.categories}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-xs-center">Posts</h3>
        <ul className="list-group list-group-index">
          {this.renderPosts()}
        </ul>
        <div className="text-xs-center">
          <Link className="btn btn-primary btn-index" to="/posts/new">
            Add a Post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);