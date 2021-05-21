import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        "col-2 position-absolute bg-primary rounded-circle " + props.className
      }
      style={Object.assign(
        {
          width: "16.667%",
          paddingTop: "16.667%",
        },
        props.style
      )}
    ></div>
  );
};

export default Card;
