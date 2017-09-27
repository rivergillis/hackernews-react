import {FETCH_POST} from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log(state);
      console.log(action);
      console.log(action.payload.data);
      // TODO: Combine this with the rest of the data in state
      return {
        [action.payload.data.id]: action.payload.data
      }
    default:
      return state;
  }
}