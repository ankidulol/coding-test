// Components
import React from "react";

// Utility
import { useHistory, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

function Start() {
  const { highscore } = useSelector(state => state.gameReducer);
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h1 onClick={() => history.push("/game")}>Start Game</h1>
      <h2>Highscore: {highscore}</h2>
      {location.lastScore !== undefined && (
        <h2>Last Game Score: {location.lastScore}</h2>
      )}
    </div>
  );
}

export default Start;
