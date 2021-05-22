import React, { useState } from "react";
import Card from "./Card";
import Score from "./Score";
import "./Main.css";

const Main = (props) => {
  const rMain = 40; // Radius of main component circle (%).
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
    {
      id: 1,
      name: "HAL 9000",
      src: "https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-superJumbo.jpg",
    },
    {
      id: 2,
      name: "Ellen Ripley",
      src: "https://www.filmfutter.com/wp-content/uploads/2015/02/latest.jpg",
    },
    {
      id: 3,
      name: "Wall-E",
      src: "https://www.staffsunion.com/asset/Event/6001/2nFyTvssbtJMLC6eyYwwZ88gALD.jpg",
    },
    {
      id: 4,
      name: "Leeloo",
      src: "https://i.pinimg.com/originals/6e/4a/c5/6e4ac5f364fc160de9bd4a8c6235c021.jpg",
    },
    {
      id: 5,
      name: "Cooper",
      src: "https://i.insider.com/546ab754ecad0463484453c2",
    },
    {
      id: 6,
      name: "Chewbacca",
      src: "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/best-friend-in-galaxy-chewbacca_TALL.jpg",
    },
    {
      id: 7,
      name: "Rick Deckard",
      src: "https://lwlies.com/wp-content/uploads/2016/01/blade-runner-harrison-ford-1108x0-c-default.jpg",
    },
    {
      id: 8,
      name: "Caesar",
      src: "https://c4.wallpaperflare.com/wallpaper/792/350/431/caesar-war-for-the-planet-of-the-apes-amiah-miller-wallpaper-preview.jpg",
    },
    {
      id: 9,
      name: "Paul Atreides",
      src: "https://cdnb.artstation.com/p/assets/images/images/030/318/801/large/brian-taylor-paul.jpg?1600250795",
    },
    {
      id: 10,
      name: "Jean-Luc Picard",
      src: "https://www.indiewire.com/wp-content/uploads/2018/08/shutterstock_390919hj.jpg",
    },
    {
      id: 11,
      name: "Johhny Rico",
      src: "https://play-lh.googleusercontent.com/proxy/O3Ok5d8yIcTHs5wBZ3mhW4PCwr7H7NQ_yTJzB7j3dPq8dB_ojpDCZtHz9ZXMgSXwvLdMUHVBRDpXDjDb0jU1kIlcqh5uPDBi7MYhacW_Fd8p_8PpWrhe=w720-h405-rw",
    },
    {
      id: 12,
      name: "Grandmaster",
      src: "https://d23.com/app/uploads/2018/02/1180w-600h_021618_video-thor-ragnarok-exclusive-clip.jpg",
    },
  ]);

  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const startHandler = () => {
    setStart(false);
  };

  const playHandler = (id) => {
    if (selectedIDs.includes(id) === false) {
      setSelectedIDs(selectedIDs.concat(id));
      setGameOver(false);
      if (highScore < score + 1) {
        setHighScore(highScore + 1);
      }
      if (score === 11) {
        setGameOver(true);
        props.setBlurBg("");
      }
      setScore(score + 1);
    } else {
      setGameOver(true);
      props.setBlurBg("");
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
    props.setBlurBg("blur");
  };

  return (
    <div className="main-component">
      <div>
        <Score
          start={start}
          startHandler={startHandler}
          score={score}
          highScore={highScore}
          gameOver={gameOver}
          gameReset={gameReset}
        />
        {items.map((item, i) => (
          <Card
            key={i}
            start={start}
            item={item}
            style={cardStyles[i]}
            gameOver={gameOver}
            playHandler={playHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
