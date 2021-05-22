import React from "react";
import "./Score.scss";

const Score = (props) => {
  const gameOver = (
    <div>
      <span>{props.score === 12 ? "YOU WON!" : "GAME OVER!"}</span>
      <br></br>
      <button className="play-again btn" onClick={props.gameReset}>
        Play again
      </button>
    </div>
  );

  const start = (
    <div className="start-wrapper">
      <p>Try to choose as many characters as you can without repetition.</p>
      <button className="play-again btn" onClick={props.startHandler}>
        Play
      </button>
    </div>
  );

  const scoreInfo = (
    <div>
      <h6>Score: {props.score}</h6>
      <h6>High score: {props.highScore}</h6>
    </div>
  );

  return (
    <div className="score-component col-6">
      <div>
        <div className="score">
          {props.start ? start : scoreInfo}
          {props.gameOver || props.score === 12 ? gameOver : null}
        </div>
      </div>
    </div>
  );
};

export default Score;
