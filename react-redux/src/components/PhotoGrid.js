import React, { PropTypes } from 'react';

import Photo from './Photo';
import FilterLink from '../containers/FilterLink';

/* eslint-disable react/prop-types */
const PhotoList = (props) => {
  if (props.posts.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Nothing here!</h2>;
  }

  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => (
        <Photo
          key={post.code}
          i={i}
          post={post}
          comments={props.comments}
          increment={props.increment}
          decrement={props.decrement}
        />
      ))}
    </div>
  );
};
/* eslint-enable react/prop-types */

const PhotoGrid = props => (
  <div>
    <div className="visibility-filters">
      <FilterLink filter="ALL">All</FilterLink>
      <FilterLink filter="LIKED">Liked</FilterLink>
      <FilterLink filter="ACTIVE">Discussed</FilterLink>
    </div>

    <PhotoList
      posts={props.posts}
      comments={props.comments}
      increment={props.increment}
      decrement={props.decrement}
    />
  </div>
);

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.objectOf(PropTypes.array),
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default PhotoGrid;
