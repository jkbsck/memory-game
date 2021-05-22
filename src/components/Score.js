import React from "react";

const Score = (props) => {
  const gameOver = (
    <div>
      <span>GAME OVER!</span>
      <br></br>
      <button className="btn btn-secondary" onClick={props.gameReset}>
        Play again
      </button>
    </div>
  );

  return (
    <div
      className="col-4 position-absolute bg-secondary rounded-circle"
      style={Object.assign(
        { width: "33.333%", paddingTop: "33.333%" },
        props.style
      )}
    >
      <div
        className="position-absolute rounded-circle bg-primary"
        style={{
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div className="d-flex flex-column">
          <h5 className="p-2 pt-4">Score: {props.score}</h5>
          <h5 className="p-2">High score: {props.highScore}</h5>

          <span className="p-2">{props.gameOver ? gameOver : null}</span>
        </div>
      </div>
    </div>
  );
};

export default Score;
