import React, { PropTypes } from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const i = props.posts.findIndex(post => (
    post.code === props.params.postId
  ));

  const post = props.posts[i];
  const postComments = props.comments[post.code] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
};

Single.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  comments: React.PropTypes.objectOf(PropTypes.array),
  params: React.PropTypes.shape({ postId: React.PropTypes.string.isRequired })
};

export default Single;
