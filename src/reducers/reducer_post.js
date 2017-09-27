import {FETCH_POST} from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // copies the state to a new object, copies the payload to a new object
      // then assigns to a key of the id inside the payload
      // then copies the payload with key to the new state
      // this is the least efficient code I have ever written
      return Object.assign({}, state, {
        [action.payload.data.id]: Object.assign({}, action.payload.data)
      });
    default:
      return state;
  }
}