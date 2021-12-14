import axios from "axios";
import history from "../history";
import {
  FETCH_USER,
  FETCH_CHARACTERS,
  CREATE_CHARACTER,
  EDIT_CHARACTER,
  SAVE_PROGRESS,
  RESET_PROGRESS,
} from "./types";

import { calculateGold } from "../components/bossedit/calculateGold";
import { encodeBossProgress } from "./encodeBossProgress";

export const fetchCharacters = () => async (dispatch) => {
  const response = await axios.get("/api/characters");

  dispatch({
    type: FETCH_CHARACTERS,
    payload: response.data,
  });
};
export const createCharacter = (formValues) => async (dispatch, getState) => {
  const googleId = getState().auth.googleId;
  // console.log(formValues);

  const response = await axios.post("/api/characters", {
    ...formValues,
    googleId,
  });
  dispatch({
    type: CREATE_CHARACTER,
    payload: response.data,
  });
  history.push("/homework");
};

export const updateBossProgress =
  (id, pb, boss) => async (dispatch, getState) => {
    const gold = calculateGold(pb, boss);
    let str = encodeBossProgress(pb, boss);
    if (gold > 0) str = str + "G" + gold;
    console.log(str);
    const bp = {};
    bp[boss] = str;
    console.log(id);
    console.log(pb);
    console.log(bp);
    const response = await axios.patch(`/api/characters/${id}`, bp);
    dispatch({
      type: EDIT_CHARACTER,
      payload: response.data,
    });
  };
export const saveProgress = (top, bottom, totalGold) => async (dispatch) => {
  const info = { top, bottom, totalGold };
  const response = await axios.patch("/api/current_user/save", info);

  dispatch({
    type: SAVE_PROGRESS,
    payload: response.data,
  });
};
export const resetProgress = (charIds) => async (dispatch) => {
  const response = await axios.patch("/api/characters", charIds);

  dispatch({
    type: RESET_PROGRESS,
    payload: response.data,
  });
  history.push("/");
};

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};
