import React, { useState } from "react";
import Card from "./Card";
import Score from "./Score";

const Main = () => {
  const rMain = 41.66667; // Radius of main component circle (%).
  const angle = 30; // Angle between cards' positions (deg).

  const distanceY = (deg, hypotenuse) => {
    let rad = (deg * Math.PI) / 180;
    return Math.sin(rad) * hypotenuse;
  };

  const distanceX = (deg, hypotenuse) => {
    let rad = (deg * Math.PI) / 180;
    return Math.cos(rad) * hypotenuse;
  };

  const cardStyles = [
    {
      left: `${rMain + distanceX(angle * 3, rMain)}%`,
      top: `${rMain - distanceY(angle * 3, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(angle * 2, rMain)}%`,
      top: `${rMain - distanceY(angle * 2, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(angle, rMain)}%`,
      top: `${rMain - distanceY(angle, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(0, rMain)}%`,
      top: `${rMain - distanceY(0, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(angle, rMain)}%`,
      top: `${rMain + distanceY(angle, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(angle * 2, rMain)}%`,
      top: `${rMain + distanceY(angle * 2, rMain)}%`,
    },
    {
      left: `${rMain + distanceX(angle * 3, rMain)}%`,
      top: `${rMain + distanceY(angle * 3, rMain)}%`,
    },
    {
      left: `${rMain - distanceX(angle * 2, rMain)}%`,
      top: `${rMain + distanceY(angle * 2, rMain)}%`,
    },
    {
      left: `${rMain - distanceX(angle, rMain)}%`,
      top: `${rMain + distanceY(angle, rMain)}%`,
    },
    {
      left: `${rMain - distanceX(0, rMain)}%`,
      top: `${rMain + distanceY(0, rMain)}%`,
    },
    {
      left: `${rMain - distanceX(angle, rMain)}%`,
      top: `${rMain - distanceY(angle, rMain)}%`,
    },
    {
      left: `${rMain - distanceX(angle * 2, rMain)}%`,
      top: `${rMain - distanceY(angle * 2, rMain)}%`,
    },
  ];

  const [items, setItems] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const playHandler = (id) => {
    if (selectedIDs.includes(id) === false) {
      setSelectedIDs(selectedIDs.concat(id));
      setGameOver(false);
      if (highScore < score + 1) {
        setHighScore(highScore + 1);
      }
      setScore(score + 1);
    } else {
      setGameOver(true);
    }
    setItems(
      items
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    );
  };

  const gameReset = () => {
    setScore(0);
    setSelectedIDs([]);
    setGameOver(false);
  };

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
          <Score
            score={score}
            highScore={highScore}
            gameOver={gameOver}
            gameReset={gameReset}
            style={{ top: "33.333%", left: "33.333%" }}
          />
          {items.map((item, i) => (
            <Card
              key={i}
              item={item}
              style={cardStyles[i]}
              gameOver={gameOver}
              playHandler={playHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
