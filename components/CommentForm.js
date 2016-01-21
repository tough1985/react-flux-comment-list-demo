import React, { Component, PropTypes } from 'react';
import {Input, Glyphicon } from 'react-bootstrap';
const userGlyphicon = <Glyphicon glyph="user" />;
export default class CommentForm extends Component {
  //定义控件属性
  static propTypes = {
    eventSubmit: PropTypes.func.isRequired,
  }

  state = {
    author: '',
    text: '',
    error: '',
  }

  onSubmit(evt) {
    //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
    evt.preventDefault();

    //检测是否填写了'作者'和'内容'
    if (!this.state.author) {
      this.setState({ error: 'User name is required.'});
    } else if (!this.state.text) {
      this.setState({ error: 'Comment text is required'});
    }{
      //调用传递过来的eventSubmit方法
      this.props.eventSubmit({
        author: this.state.author,
        text: this.state.text,
      });
      //重置state
      this.setState({author: '', text: ''});
    }
  }

  // ::this.onSubmit
  // this.onSubmit.bind(this)

  // evt => this.setState({author: evt.target.value, error: ''})

  // function(evt){
  //   this.setState({author:evt.target.value, error: ''});
  // }

  // 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
  // onChange={evt => this.setState({text: evt.target.value, error: ''})}

  handleChange = function(evt){
    this.setState({author:evt.target.value, error: ''});
  }


  render() {
    return (
      <form className="comment-form" onSubmit={this.onSubmit.bind(this)} >
        <div>
          <label>Your name:</label>
          <Input className='comment-form-username' type="text" addonBefore={userGlyphicon} value={this.state.author}
            onChange={this.handleChange.bind(this)}/>

        </div>
        <div>
          <label>Your comment:</label>
          <textarea value={this.state.text}
            onChange={function(evt){
              this.setState({text: evt.target.value, error: ''});
            }.bind(this)}></textarea>
        </div>
        {
          this.state.error &&
          <div className="error-msg">
            {this.state.error}
          </div>
        }
        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
    );
  }

}
