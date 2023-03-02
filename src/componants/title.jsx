import React, { useContext } from "react";
import { GameContext } from "../context/game-context";

export default function Title() {
  const {
    getPlayerLetter,
    winner,
    resetGame,
    refreshPage,
    gameFinished
  } = useContext(GameContext);
  console.log(winner);

  const handleReset = () => {
    resetGame();
    refreshPage(Math.random());
  };

  return (
    <div className="titleSection">
      {gameFinished() ? (
        winner === 3 ? (
          <h2>Its A Draw</h2>
        ) : (
          <h2>Player {winner} Won</h2>
        )
      ) : (
        <h2>Player {getPlayerLetter()}'s turn</h2>
      )}
      <button onClick={handleReset} className="resetBtn">
        Reset
      </button>
    </div>
  );
}
