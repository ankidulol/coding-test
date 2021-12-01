// Components
import React from "react";

// Utility
import { useHistory, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Styles
import { Wrapper, Button, Highscore } from "./styles";

function Start() {
  const { highscore } = useSelector(state => state.gameReducer);
  const location = useLocation();
  const history = useHistory();

  return (
      <Wrapper>
      <Button onClick={() => history.push("/game")}>Start Game</Button>
      <Highscore>Highscore: {highscore}</Highscore>
      {location.lastScore !== undefined && (
        <h2>Last Game Score: {location.lastScore}</h2>
      )}
    </Wrapper>
  );
}

export default Start;
