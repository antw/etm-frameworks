import React, { PropTypes } from 'react';

class Comments extends React.Component {
  static propTypes = {
    removeComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    postComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired
  }

  constructor() {
    super();

    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const postId = this.props.params.postId;
    const author = this.commentAuthor.value;
    const message = this.commentMessage.value;

    this.props.addComment(postId, author, message);

    this.commentForm.reset();
  }

  renderComment(comment, i) {
    const { postId } = this.props.params;

    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => { this.props.removeComment(postId, i); }}
          >&times;</button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={(form) => { this.commentForm = form; }}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            ref={(input) => { this.commentAuthor = input; }}
            placeholder="author"
          />
          <input
            type="text"
            ref={(input) => { this.commentMessage = input; }}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
