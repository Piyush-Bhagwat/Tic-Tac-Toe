import { useContext } from "react";
import Game from "./componants/game";
import Title from "./componants/title";
import GameContextProvider from "./context/game-context";
import "./styles.css";

export default function App() {
  return (
    <div className="body">
      <GameContextProvider>
        <Title />
        <Game />
      </GameContextProvider>
    </div>
  );
}
