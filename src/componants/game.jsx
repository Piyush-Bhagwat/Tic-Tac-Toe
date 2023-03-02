import React, { useContext, useState } from "react";
import { GameContext } from "../context/game-context";
import Box from "./Box";

export default function Game() {
  const { toRefresh } = useContext(GameContext);

  const IDs = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  const renderBoxes = () => {
    return (
      <>
        {IDs.map((i) => (
          <Box id={i} key={i + toRefresh} />
        ))}
      </>
    );
  };

  return (
    <div className="game" key={toRefresh}>
      {renderBoxes()}
    </div>
  );
}
