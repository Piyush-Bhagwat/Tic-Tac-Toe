// 1:X 2:O

import React, { createContext, useState } from "react";
export const GameContext = createContext(null);

var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

export default function GameContextProvider(props) {
  const [toRefresh, refreshPage] = useState(1);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  const togglePlayer = () => {
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  };

  const getPlayerLetter = () => {
    //get the Current Player
    if (player === 1) {
      return "X";
    } else {
      return "O";
    }
  };

  function rowSame() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== 0) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          return 1;
        }
      }
    }
    return 0;
  }

  function colSame() {
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== 0) {
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
          return 1;
        }
      }
    }
    return 0;
  }

  function digSame() {
    if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== 0
    ) {
      return 1;
    } else if (
      board[2][0] === board[1][1] &&
      board[0][2] === board[1][1] &&
      board[2][0] !== 0
    ) {
      return 1;
    }

    return 0;
  }

  function won() {
    if (rowSame() || colSame() || digSame()) {
      return 1;
    }
    return 0;
  }

  function gameFinished() {
    if (won()) {
      return 1;
    }
    if (isBoardFilled()) {
      return 2;
    }
    return 0;
  }

  function resetGame() {
    board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    setPlayer(1);
    setWinner(0);
  }

  function valAt(pos) {
    const x = Math.floor(pos / 3);
    const y = Math.floor(pos % 3);
    return board[x][y];
  }

  function isBoardFilled() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          return 0;
        }
      }
    }
    return 1;
  }

  const setPosition = (pos) => {
    //To set board value
    pos = Number(pos);
    const x = Math.floor(pos / 3);
    const y = Math.floor(pos % 3);

    board[x][y] = player;
  };

  const GameContextExports = {
    player,
    board,
    togglePlayer,
    getPlayerLetter,
    setPosition,
    won,
    winner,
    setWinner,
    resetGame,
    valAt,
    toRefresh,
    refreshPage,
    isBoardFilled,
    gameFinished
  };

  return (
    <GameContext.Provider value={GameContextExports}>
      {props.children}
    </GameContext.Provider>
  );
}
