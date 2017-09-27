import {FETCH_IDS} from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_IDS:
      return action.payload.data;
    default:
      return state;
  }
}