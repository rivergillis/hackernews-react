import { combineReducers } from 'redux';
import TopIdsReducer from './reducer_top_ids';
import PostReducer from './reducer_post';

const rootReducer = combineReducers({
  topIds: TopIdsReducer,
  posts: PostReducer,
});

export default rootReducer;
