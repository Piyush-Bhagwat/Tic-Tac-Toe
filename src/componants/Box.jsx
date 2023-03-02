import React, { useContext, useState } from "react";
import { GameContext } from "../context/game-context";

export default function Box({ id }) {
  const [isChecked, setChecked] = useState(0);

  const {
    getPlayerLetter,
    togglePlayer,
    setPosition,
    setWinner,
    valAt,
    gameFinished
  } = useContext(GameContext);

  const decidePlayer = () => {
    if (isChecked === 1) {
      return <i className="fa-solid fa-xmark"></i>;
    } else if (isChecked === 2) {
      return <i className="fa-solid fa-o"></i>;
    }
  };

  const handleClick = (e) => {
    if (isChecked === 0 && !gameFinished()) {
      setPosition(id);
      setChecked(valAt(id));

      if (gameFinished() === 1) {
        console.log(getPlayerLetter(), `Won`);
        setWinner(getPlayerLetter());
      }
      if (gameFinished() === 2) {
        console.log("Draw");
        setWinner(3);
      }

      togglePlayer();
    }
  };

  return (
    <div className="box" onClick={handleClick}>
      {isChecked !== 0 ? decidePlayer() : ""}
    </div>
  );
}
