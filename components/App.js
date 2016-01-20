import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentActions from '../actions/CommentActions';
import CommentStore from '../stores/CommentStore';
import './App.less';

function getAppState() {
  return {
    comments: CommentStore.getAll(),
    // comments: [
    //   {
    //     id: "1",
    //     author: "queen",
    //     date: new Date(),
    //     text: 'comments test',
    //   },
    //   {
    //     id: "2",
    //     author: "queen",
    //     date: new Date(),
    //     text: 'comments test',
    //   }
    // ]
  }
}

export default class App extends Component {

  constructor(props){
    super(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  state = getAppState()

  componentDidMount() {
    CommentStore.addChangeListener(this.onStoreChange);
    for (var i = 0; i < 2; i++) {
      CommentActions.create('queen', 'comments test');
    }
  }

  componentWillUnmount() {
    CommentStore.removeChangeListener(this.onStoreChange);
  }

  onStoreChange() {
    this.setState(getAppState());
  }

  eventSubmit(args) {
    // console.log('app');
    // console.log('this.state=' + this.state);

    //发出一个Action
    CommentActions.create(args.author, args.text);
  }

  render() {
    return (
      <div>
        <h2 className="comment-list-header">
          Comments
        </h2>
        <CommentList comments={this.state.comments}/>
        <CommentForm eventSubmit={this.eventSubmit.bind(this)}/>
      </div>
    );
  }
}
