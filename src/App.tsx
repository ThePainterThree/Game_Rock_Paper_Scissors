import { useState } from "react";
import type { GameResult, PlayerMove } from "./types/game";
import { getRandomComputerMove, andTheWinnerIs } from "./helpers/gameLogic";
import { Button } from "@chakra-ui/react";

function App() {
  const [playerMove, setPlayerMove] = useState<PlayerMove | null>(null);
  const [computerMove, setComputerMove] = useState<PlayerMove | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  function playMove(move: PlayerMove) {}

  return (
    <section>
      <Button>Rock</Button>
      <Button>Paper</Button>
      <Button>Scissors</Button>
      <Button>Lizard</Button>
      <Button>Spock</Button>
    </section>
  );
}

export default App;
