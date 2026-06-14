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

  function displayMove(move: PlayerMove | null) {
    if (!move) return "";
    return move.charAt(0).toUpperCase() + move.slice(1);
  }

  return (
    <div>
      {moves.map((move) => (
        <Button key={move} onClick={() => playMove(move)}>
          {move}
        </Button>
      ))}

      {playerMove && computerMove && gameResult && (
        <section>
          <p>You played: {displayMove(playerMove)}</p>
          <p>Computer played: {displayMove(computerMove)}</p>
          <h2>
            {gameResult === "win"
              ? "You won!"
              : gameResult === "lose"
                ? "Computer won!"
                : "It's a draw!"}
          </h2>
        </section>
      )}
    </div>
  );
}

export default App;
