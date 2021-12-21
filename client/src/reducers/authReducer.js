/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USER, SAVE_PROGRESS, EDIT_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SAVE_PROGRESS:
      return { ...state, ...action.payload };
    case EDIT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
