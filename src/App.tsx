import { useState } from "react";
import type { GameResult, PlayerMove } from "./types/game";
import { getRandomComputerMove, andTheWinnerIs } from "./helpers/gameLogic";
import { Button } from "@chakra-ui/react";

function App() {
  const [playerMove, setPlayerMove] = useState<PlayerMove | null>(null);
  const [computerMove, setComputerMove] = useState<PlayerMove | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  function playMove(move: PlayerMove) {
    const computerPlay = getRandomComputerMove();
    const result = andTheWinnerIs(move, computerPlay);

    setPlayerMove(move);
    setComputerMove(computerPlay);
    setGameResult(result);
  }

  return (
    <div>
      <Button onClick={() => playMove("rock")}>Rock</Button>
      <Button onClick={() => playMove("paper")}>Paper</Button>
      <Button onClick={() => playMove("scissors")}>Scissors</Button>
      <Button onClick={() => playMove("lizard")}>Lizard</Button>
      <Button onClick={() => playMove("spock")}>Spock</Button>

      {playerMove && (
        <>
          <p>You played: {playerMove}</p>
          <p>Computer played: {computerMove}</p>
          <p>Result: {gameResult}</p>
        </>
      )}
    </div>
  );
}

export default App;
