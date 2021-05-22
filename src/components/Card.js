import React from "react";
import "./Card.scss";

const Card = (props) => {
  const playHandler = () => props.playHandler(props.item.id);

  return (
    <div
      onClick={props.gameOver ? null : playHandler}
      className={`card-component col-2 ${
        props.gameOver || props.start ? "inactive" : "active"
      }`}
      style={props.style}
    >
      <div className="img-wrapper">
        <img src={props.item.src} alt={props.item.name} />
      </div>
    </div>
  );
};

export default Card;
