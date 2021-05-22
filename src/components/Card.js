import React from "react";

const Card = (props) => {
  const playHandler = () => props.playHandler(props.item.id);

  return (
    <div
      onClick={props.gameOver ? null : playHandler}
      className={"col-2 position-absolute rounded-circle " + props.className}
      style={Object.assign(
        {
          width: "16.667%",
          paddingTop: "16.667%",
        },
        props.style
      )}
    >
      <div
        className="position-absolute rounded-circle bg-danger"
        style={{
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          filter: props.gameOver ? "blur(5px)" : "",
        }}
      >
        {props.item.id}
      </div>
    </div>
  );
};

export default Card;
