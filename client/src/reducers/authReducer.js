/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USER, SAVE_PROGRESS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SAVE_PROGRESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
