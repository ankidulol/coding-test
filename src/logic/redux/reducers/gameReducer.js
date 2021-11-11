import { UPDATE_HIGHSCORE } from "../actions/game";

const initialState = {
  highscore: 0
};

export default function gameReducer(state = initialState, { type, data }) {
  switch (type) {
    case UPDATE_HIGHSCORE:
      if (state.highscore < data) {
        return { ...state, highscore: data };
      }
      return state;
    default:
      return state;
  }
}
