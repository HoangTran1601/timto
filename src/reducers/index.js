
import { combineReducers } from 'redux';
import postList from './postList';
import user from './user'

export default combineReducers({
  posts: postList,
  user: user
});