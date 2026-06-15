import { useState } from "react";
import type { GameResult, PlayerMove } from "./types/game";
import {
  getRandomComputerMove,
  andTheWinnerIs,
  moves,
  moveIcons,
} from "./helpers/gameLogic";
import { Box, Button, HStack, VStack, Text } from "@chakra-ui/react";

function App() {
  const [playerMove, setPlayerMove] = useState<PlayerMove | null>(null);
  const [computerMove, setComputerMove] = useState<PlayerMove | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [slotMachineEffect, setSlotMachineEffect] = useState(false);
  const [displayedComputerMove, setDisplayedComputerMove] =
    useState<PlayerMove | null>(null);

  function formatMoveName(move: PlayerMove | null) {
    if (!move) return "";
    return move.charAt(0).toUpperCase() + move.slice(1);
  }

  function playMove(move: PlayerMove) {
    setPlayerMove(move);
    setGameResult(null);
    setComputerMove(null);
    setSlotMachineEffect(true);

    let counter = 0;
    const interval = setInterval(() => {
      const randomComputerMove = getRandomComputerMove();
      setDisplayedComputerMove(randomComputerMove);
      counter++;

      if (counter >= 12) {
        clearInterval(interval);
        const selectedComputerMove = getRandomComputerMove();
        const result = andTheWinnerIs(move, selectedComputerMove);

        setDisplayedComputerMove(selectedComputerMove);
        setComputerMove(selectedComputerMove);
        setGameResult(result);
        setSlotMachineEffect(false);
      }
    }, 100);
  }

  return (
    <VStack gap={6}>
      <HStack gap={3}>
        {moves.map((move) => (
          <Button
            key={move}
            onClick={() => playMove(move)}
            disabled={slotMachineEffect}
          >
            {moveIcons[move]} {formatMoveName(move)}
          </Button>
        ))}
      </HStack>

      <Box textAlign="center" boxShadow={slotMachineEffect ? "lg" : "md"}>
        <Text textStyle="sm"> Computer is choosing</Text>
        <Text
          textStyle="4xl"
          fontWeight="bold"
          color={slotMachineEffect ? "purple.400" : "green.300"}
        >
          {displayedComputerMove ? formatMoveName(displayedComputerMove) : "?"}
        </Text>
      </Box>

      <div>
        {playerMove && computerMove && gameResult && (
          <section>
            <p>You played: {formatMoveName(playerMove)}</p>
            <p>Computer played: {formatMoveName(displayedComputerMove)}</p>
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
    </VStack>
  );
}

export default App;
