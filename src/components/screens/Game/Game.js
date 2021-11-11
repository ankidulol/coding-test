// Components
import React, { useEffect, useState } from "react";
import Button from "../../utility/Button/Button.js";
import Score from "../../utility/Score/Score.js";
import Stop from "../../utility/Stop/Stop.js";

// Utility
import { useHistory } from "react-router-dom";
import { sleep, randomNumber, updateArray } from "../../../logic/helpers.js";

// Redux
import { useDispatch } from "react-redux";
import { updateHighscore } from "../../../logic/redux/actions/game.js";

// Styles
import { buttons, center } from "./styles.js";

function Game() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [gameStarted, setGameStarted] = useState(false);
  const [colors, setColors] = useState([false, false, false, false]);
  const [rounds, setRounds] = useState(2);
  const [delay, setDelay] = useState(1000);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [allowPress, setAllowPress] = useState(false);
  const [points, setPoints] = useState(0);

  const handleGameEnding = msg => {
    console.log(msg);
    dispatch(updateHighscore(points));
    history.replace({
      pathname: "/",
      lastScore: points
    });
  };

  useEffect(() => {
    const asyncWrap = async () => {
      await sleep(4000);
      setGameStarted(true);
    };
    asyncWrap();
  }, []);

  useEffect(() => {
    if (userAnswer && allowPress) {
      console.log("TIMER STARTED! ANSWER IN 10 SECONDS!");
      const timer = setTimeout(() => {
        handleGameEnding("Time ended!");
      }, 10000);
      return () => {
        console.log("CLEARING TIMER");
        clearTimeout(timer);
      };
    }
  }, [allowPress, userAnswer]);

  useEffect(() => {
    const asyncWrap = async () => {
      if (gameStarted) {
        console.log("GAME STARTED");
        let correctAnswers = [];
        for (let i = 0; i < rounds; i++) {
          const num = randomNumber();
          console.log("num", num);
          setColors(updateArray(colors, true, num));
          correctAnswers = [...correctAnswers, num];
          await sleep(delay);
          setColors([false, false, false, false]);
          await sleep(50);
        }

        setColors([false, false, false, false]);

        setCorrectAnswer(correctAnswers);
        setGameStarted(false);
      }
    };
    asyncWrap();
  }, [gameStarted]);

  useEffect(() => {
    if (correctAnswer.length === rounds) {
      console.log("CORRECT ANSWERS HAS BEEN SET! WAIT FOR USER INPUT");
      setAllowPress(true);
    }
  }, [correctAnswer]);

  useEffect(() => {
    if (userAnswer && allowPress) {
      if (userAnswer.length === correctAnswer.length) {
        for (let i = 0; i < userAnswer.length; i++) {
          if (userAnswer[i] !== correctAnswer[i]) {
            handleGameEnding("Wrong answer! End the game");
          }
        }
        console.log("EVERYTHING WAS CORRECT! GO TO NEXT ROUND");
        setUserAnswer([]);
        setCorrectAnswer([]);
        setPoints(rounds);
        setRounds(rounds + 1);
        setDelay(delay - 50);
        setAllowPress(false);
        setGameStarted(true);
      } else {
        for (let i = 0; i < userAnswer.length; i++) {
          if (userAnswer[i] !== correctAnswer[i]) {
            handleGameEnding("Wrong answer! End the game");
          }
        }
      }
    }
  }, [userAnswer, allowPress]);

  const pressed = async num => {
    if (allowPress) {
      console.log("user pressed button: ", num);
      setUserAnswer([...userAnswer, num]);
    } else {
      console.log("PRESS NOT ALLOWED!");
    }
  };

  return (
    <div>
      <h1 style={center}>
        {gameStarted || allowPress ? "GAME STARTED" : "STARTING IN 3 SECONDS"}
      </h1>
      <div style={buttons}>
        <Button
          color="blue"
          active={colors[0]}
          onClick={() => {
            pressed(0);
          }}
        />
        <Button color="red" active={colors[1]} onClick={() => pressed(1)} />
        <Button color="yellow" active={colors[2]} onClick={() => pressed(2)} />
        <Button color="green" active={colors[3]} onClick={() => pressed(3)} />
      </div>
      <h2 style={center}>
        {userAnswer && allowPress && "ANSWER IN 10 SECONDS!"}
      </h2>
      <Score points={points} />
      <Stop />
    </div>
  );
}

export default Game;
