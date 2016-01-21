import {ButtonInput, ButtonToolbar, Button, Input, Glyphicon } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';


// require('../public/stylesheets/bootstrap.min.css');

const userGlyphicon = <Glyphicon glyph="user" />;
const lockGlyphicon = <Glyphicon glyph="lock" />;


export default class ButtonBS extends Component {
  onSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form className="col-md-8" onSubmit={::this.onSubmit}>
        <Input type="text" addonBefore={userGlyphicon} placeholder='请输入用户名'/>
        <Input type="text" addonBefore={lockGlyphicon}
        placeholder='请输入密码'/>
      <ButtonInput className="col-md-12" type="submit" value="登录" bsStyle="primary"/>
      </form>
    );
  }
}
