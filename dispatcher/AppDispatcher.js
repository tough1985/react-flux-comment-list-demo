import { Dispatcher } from 'flux';
import CommentStore from '../stores/CommentStore';

var AppDispatcher = new Dispatcher();
// export default new Dispatcher();

AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case 'comment_create':
      CommentStore.addItem(action.author, action.text);
      CommentStore.emitChange();
      break;
    default:

  }
});

export default AppDispatcher;
