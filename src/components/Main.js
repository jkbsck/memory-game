import React from "react";
import Card from "./Card";
import Score from "./Score";

const Main = () => {
  const rMain = 41.66667; // Radius of main component circle (%).
  const rCard = 8.33333; // Radius of card component circle (%).
  const angle = 30; // Angle between cards' positions (deg).

  console.log(`"${distanceX(angle * 2, rMain) + rMain}%"`);

  return (
    <div
      className="bg-info"
      style={{
        position: "relative",
        paddingTop: "100%",
        width: "100%",
      }}
    >
      <div
        className="position-absolute"
        style={{ bottom: "10px", top: "10px", right: "10px", left: "10px" }}
      >
        <div className="" style={{ height: "100%" }}>
          <Score style={{ top: "33.333%", left: "33.333%" }} />
          {/* {[...Array(12)].map((e, i) => (
            <Card position={"bg-success"} key={i} />
          ))} */}
          <Card
            key={1}
            style={{
              left: `${rMain + distanceX(angle * 3, rMain)}%`,
              top: `${rMain - distanceY(angle * 3, rMain)}%`,
            }}
          />
          <Card
            key={2}
            style={{
              left: `${rMain + distanceX(angle * 2, rMain)}%`,
              top: `${rMain - distanceY(angle * 2, rMain)}%`,
            }}
          />
          <Card
            key={3}
            className=""
            style={{
              left: `${rMain + distanceX(angle, rMain)}%`,
              top: `${rMain - distanceY(angle, rMain)}%`,
            }}
          />
          <Card
            key={4}
            className=""
            style={{
              left: `${rMain + distanceX(0, rMain)}%`,
              top: `${rMain - distanceY(0, rMain)}%`,
            }}
          />
          <Card
            key={5}
            className=""
            style={{
              left: `${rMain + distanceX(angle, rMain)}%`,
              top: `${rMain + distanceY(angle, rMain)}%`,
            }}
          />
          <Card
            key={6}
            className=""
            style={{
              left: `${rMain + distanceX(angle * 2, rMain)}%`,
              top: `${rMain + distanceY(angle * 2, rMain)}%`,
            }}
          />
          <Card
            key={7}
            className=""
            style={{
              left: `${rMain + distanceX(angle * 3, rMain)}%`,
              top: `${rMain + distanceY(angle * 3, rMain)}%`,
            }}
          />
          <Card
            key={8}
            className=""
            style={{
              left: `${rMain - distanceX(angle * 2, rMain)}%`,
              top: `${rMain + distanceY(angle * 2, rMain)}%`,
            }}
          />
          <Card
            key={9}
            className=""
            style={{
              left: `${rMain - distanceX(angle, rMain)}%`,
              top: `${rMain + distanceY(angle, rMain)}%`,
            }}
          />
          <Card
            key={10}
            className=""
            style={{
              left: `${rMain - distanceX(0, rMain)}%`,
              top: `${rMain + distanceY(0, rMain)}%`,
            }}
          />
          <Card
            key={11}
            className=""
            style={{
              left: `${rMain - distanceX(angle, rMain)}%`,
              top: `${rMain - distanceY(angle, rMain)}%`,
            }}
          />
          <Card
            key={12}
            className=""
            style={{
              left: `${rMain - distanceX(angle * 2, rMain)}%`,
              top: `${rMain - distanceY(angle * 2, rMain)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const distanceY = (deg, hypotenuse) => {
  let rad = (deg * Math.PI) / 180;
  return Math.sin(rad) * hypotenuse;
};

const distanceX = (deg, hypotenuse) => {
  let rad = (deg * Math.PI) / 180;
  return Math.cos(rad) * hypotenuse;
};

export default Main;
