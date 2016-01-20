import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
  create(author, text) {
    AppDispatcher.dispatch({
      actionType: 'comment_create',
      author: author,
      text: text,
    });
  }
};
