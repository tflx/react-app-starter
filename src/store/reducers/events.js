import { combineReducers } from 'redux';
import { DO_SOMETHING } from '../actions/actions';

function fetching(state = false, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return {...state, fetching: true};

    default:
      return state;
  }
}

const reducers = combineReducers({
  fetching,
});

export default reducers;