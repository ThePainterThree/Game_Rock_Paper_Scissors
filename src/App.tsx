import { useState } from "react";
import type { GameResult, PlayerMove } from "./types/game";
import {
  getRandomComputerMove,
  andTheWinnerIs,
  moves,
} from "./helpers/gameLogic";
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
      {moves.map((move) => (
        <Button key={move} onClick={() => playMove(move)}>
          {move}
        </Button>
      ))}

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
