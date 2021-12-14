/* eslint-disable import/no-anonymous-default-export */
// import _ from "lodash";
import { POPULATE_BOSS } from "../actions/types";

const INITIAL_STATE = {
  normal: false,
  hard: false,
  gateway: false,
  n1: false,
  n2: false,
  n3: false,
  h1: false,
  h2: false,
  h3: false,
  bus: false,
  busfee: 0,
  goldEarned: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_BOSS:
      return { ...action.payload };

    default:
      return state;
  }
};
