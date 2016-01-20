import React, { Component, PropTypes } from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends Component {

  static propTypes = {
    //定义comments属性
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    })),
  }

// comment => <CommentItem key={comment.id} comment={comment}/>
  render() {
    return (
      <div className="comment-list">
        {
          this.props.comments.map(
            function(comment){
              return (<CommentItem key={comment.id} comment={comment}/>)
            }
          )
        }
      </div>
    )
  }
}
