import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actionCreators';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibility.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterLink = props => (
  <button
    className={props.active ? 'active' : ''}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  onClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
