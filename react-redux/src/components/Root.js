import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    comments: state.comments,
    posts: state.posts
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
