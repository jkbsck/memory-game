import React from "react";
import "./Score.css";

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

  return (
    <div className="score-component col-6">
      <div>
        <div className="score">
          <div>
            <h6>Score: {props.score}</h6>
            <h6>High score: {props.highScore}</h6>
          </div>

          {props.gameOver || props.score === 12 ? gameOver : null}
        </div>
      </div>
    </div>
  );
};

export default Score;
