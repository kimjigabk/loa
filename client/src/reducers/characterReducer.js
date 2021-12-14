/* eslint-disable import/no-anonymous-default-export */
import _ from "lodash";
import {
  CREATE_CHARACTER,
  FETCH_CHARACTERS,
  EDIT_CHARACTER,
  RESET_PROGRESS,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case CREATE_CHARACTER:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_CHARACTER:
      return { ...state, [action.payload._id]: action.payload };
    case RESET_PROGRESS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};
