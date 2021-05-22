import React from "react";
import "./Card.css";

const Card = (props) => {
  const playHandler = () => props.playHandler(props.item.id);

  return (
    <div
      onClick={props.gameOver ? null : playHandler}
      className={`card-component col-2 ${
        props.gameOver ? "inactive" : "active"
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
