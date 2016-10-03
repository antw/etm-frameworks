import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

function getVisiblePosts(posts, comments, filter) {
  switch (filter) {
    case 'LIKED':
      return posts.filter(p => p.isLiked);
    case 'ACTIVE':
      return posts.filter(p => comments[p.code] && comments[p.code].length);
    default:
      return posts;
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    posts: getVisiblePosts(state.posts, state.comments, state.visibility.filter)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function Root(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      {props.children ? React.cloneElement(props.children, props) : null}
    </div>
  );
}

Root.propTypes = { children: React.PropTypes.node };

export default connect(mapStateToProps, mapDispatchToProps)(Root);
