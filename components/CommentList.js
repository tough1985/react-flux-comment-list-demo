import { Button } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';
import CommentItem from './CommentItem';

const pageSize = 5;

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

  state = {
    showComment: [],
    index: 0,
    pageCount: 1,
  }
//加载控件，渲染DOM节点，但是并没有传入参数
componentDidMount() {
  console.log('componentDidMount comments=' + JSON.stringify(this.props.comments));

}

getShowComment(comments, index){
  console.log('getShowComment index=' + index);
  return comments.slice(index * pageSize, (index+1) * pageSize);
}

//控件将要接受参数，可以再此对参数做一些处理和验证
componentWillReceiveProps(nextProps) {

  var pageCount = Math.ceil(nextProps.comments.length / pageSize);
  // var showComment = nextProps.comments.slice(this.state.index, this.state.index + pageSize);

  this.setState({
    showComment: this.getShowComment(nextProps.comments, pageCount - 1),
    pageCount: pageCount,
    index: pageCount-1,
  })

  console.log('componentWillReceiveProps _ nextProps' + JSON.stringify(nextProps));
}

//接受到参数，判断是否更新，返回true代表更新，返回false代表不更新
shouldComponentUpdate(nextProps, nextState) {


  console.log('shouldComponentUpdate _ nextProps' + JSON.stringify(nextProps));
  console.log('shouldComponentUpdate _ nextState' + JSON.stringify(nextState));

  //超过10条不在更新
  if (nextProps.comments.length > 10) {

    return false;
  }

  return true;
}
//组件更新之后调用，可以根据prevProps, prevState还原操作
componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate prevProps=' + JSON.stringify(prevProps));
  console.log('componentDidUpdate prevState=' + JSON.stringify(prevState));
}

//上一页按钮监听事件
pre(evt) {
  console.log('pre');
  var nextIndex = --this.state.index;
  this.setState({
    showComment: this.getShowComment(this.props.comments, nextIndex),
    index: nextIndex,
  })
}
//下一页按钮监听事件
next(evt){
  console.log('next');
  var nextIndex = ++this.state.index;
  this.setState({
    showComment: this.getShowComment(this.props.comments, nextIndex),
    index: nextIndex,
  })
}

// comment => <CommentItem key={comment.id} comment={comment}/>
  render() {
    return (
      <div className="comment-list">
        {
          //this.props.comments.map(
          this.state.showComment.map(
            function(comment){
              return (<CommentItem key={comment.id} comment={comment}/>)
            }
          )
        }
        <div className='comment-list-bns'>
          <Button className='comment-list-preBN' bsStyle="primary" disabled={!(this.state.index > 0)} onClick={ ::this.pre } >上一页</Button>

          <Button className='comment-list-nextBN' bsStyle="primary" disabled={!(this.state.index + 1 < this.state.pageCount)} onClick={ ::this.next } >下一页</Button>
        </div>
      </div>
    )
  }
}
