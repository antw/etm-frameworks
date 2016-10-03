import React, { PropTypes } from 'react';

import Photo from './Photo';

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map((post, i) => (
      <Photo
        key={i}
        i={i}
        post={post}
        comments={props.comments}
        increment={props.increment}
        decrement={props.decrement}
      />
    ))}
  </div>
);

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.objectOf(PropTypes.array)
};

export default PhotoGrid;
