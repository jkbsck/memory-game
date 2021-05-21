import React from "react";

const Score = (props) => {
  return (
    <div
      className="col-4 position-absolute bg-secondary rounded-circle"
      style={Object.assign(
        { width: "33.333%", paddingTop: "33.333%" },
        props.style
      )}
    ></div>
  );
};

export default Score;
