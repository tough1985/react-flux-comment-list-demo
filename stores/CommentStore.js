import { EventEmitter } from 'events';

//评论条目数组
const _comments = {};

const CommentStore = Object.assign({}, EventEmitter.prototype, {
  //返回所有的评论条目
  getAll() {
      const arr = [];
      for (const p in _comments) {
        arr.push(_comments[p]);
      }
      arr.sort((c1, c2) => c1.date.getTime() - c2.date.getTime());
      return arr;
    },
    //添加一条评论
    addItem(author, text) {
      const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

      console.log('addItem_id=' + id);

      _comments[id] = {
        id: id,
        text: text,
        author: author,
        date: new Date(),
      }
    },
    //发出‘change’事件
    emitChange() {
      this.emit('change');
    },
    //添加事件监听
    addChangeListener(callback) {
      this.on('change', callback);
    },
    //删除事件监听
    removeChangeListener(callback) {
      this.removeListener('change', callback);
    }

});

export default CommentStore;
