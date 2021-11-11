export const UPDATE_HIGHSCORE = "UPDATE_HIGHSCORE";

export const updateHighscore = points => {
  return { type: UPDATE_HIGHSCORE, data: points };
};
