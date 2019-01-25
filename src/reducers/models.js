import { ADD_MODEL } from '../actions/models';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      return [...state, action.payload];
    default:
      return state;
  }
};
