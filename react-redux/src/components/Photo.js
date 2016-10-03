import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

class Photo extends React.Component {
  static propTypes = {
    comments: PropTypes.objectOf(PropTypes.array),
    i: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    post: PropTypes.shape({
      caption: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      display_src: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      isLiked: PropTypes.bool
    }).isRequired
  };

  constructor() {
    super();

    this.state = { isLoaded: false };

    this.imageDidLoad = this.imageDidLoad.bind(this);
    this.handleToggleLikes = this.handleToggleLikes.bind(this);
  }

  imageDidLoad() {
    this.setState({ isLoaded: true });
  }

  handleToggleLikes(e) {
    e.preventDefault();
    e.target.blur();

    if (this.props.post.isLiked) {
      return this.props.decrement(this.props.i);
    }

    return this.props.increment(this.props.i);
  }

  render() {
    const { post, comments } = this.props;

    const likeButtonClasses = classNames({
      likes: true,
      liked: post.isLiked
    });

    const photoClasses = classNames({
      'grid-photo-wrap': true,
      loading: !this.state.isLoaded
    });

    return (
      <figure className="grid-figure">
        <div className={photoClasses}>
          <Link to={`view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              onLoad={() => this.imageDidLoad()}
              className="grid-photo"
            />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.handleToggleLikes} className={likeButtonClasses}>
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />&nbsp;
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
