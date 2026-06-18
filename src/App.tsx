import { useState } from "react";
import type { GameResult, PlayerMove, Score } from "./types/game";
import {
  getRandomComputerMove,
  andTheWinnerIs,
  moves,
  moveIcons,
  getResultMessage,
} from "./helpers/gameLogic";
import { Box, Button, HStack, VStack, Text, Heading } from "@chakra-ui/react";

function App() {
  const [playerMove, setPlayerMove] = useState<PlayerMove | null>(null);
  const [computerMove, setComputerMove] = useState<PlayerMove | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [slotMachineEffect, setSlotMachineEffect] = useState(false);
  const [displayedComputerMove, setDisplayedComputerMove] =
    useState<PlayerMove | null>(null);
  const [score, setScore] = useState<Score>({
    player: 0,
    computer: 0,
    draws: 0,
  });

  function formatMoveName(move: PlayerMove | null) {
    if (!move) return "";
    return move.charAt(0).toUpperCase() + move.slice(1);
  }

  function playMove(move: PlayerMove) {
    setPlayerMove(null);
    setGameResult(null);
    setComputerMove(null);
    setDisplayedComputerMove(null);
    setSlotMachineEffect(true);

    let counter = 0;

    const interval = setInterval(() => {
      const randomComputerMove = getRandomComputerMove();
      setDisplayedComputerMove(randomComputerMove);
      counter++;

      if (counter >= 11) {
        clearInterval(interval);
        const selectedComputerMove = getRandomComputerMove();
        const result = andTheWinnerIs(move, selectedComputerMove);

        setDisplayedComputerMove(selectedComputerMove);
        setComputerMove(selectedComputerMove);
        setPlayerMove(move);
        setGameResult(result);
        setSlotMachineEffect(false);

        setScore((previousScore) => {
          if (result === "win") {
            return { ...previousScore, player: previousScore.player + 1 };
          }
          if (result === "lose") {
            return { ...previousScore, computer: previousScore.computer + 1 };
          }
          return { ...previousScore, draws: previousScore.draws + 1 };
        });
      }
    }, 100);
  }

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={8}
      width="100%"
    >
      <VStack gap={8} justify="center" minH="100vh">
        <Heading textAlign="center" size="4xl">
          Rock Paper Scissors Lizard Spock
        </Heading>

        <HStack gap={8} justify="center" align="center" wrap="wrap">
          <Box
            textAlign="center"
            border="2px solid"
            borderRadius="xl"
            p={6}
            minW="220px"
          >
            <Text fontWeight="bold" fontSize="3xl">
              Player
            </Text>

            <Text fontSize="6xl">
              {playerMove ? moveIcons[playerMove] : "?"}
            </Text>

            <Text fontSize="md">
              {playerMove ? formatMoveName(playerMove) : "Waiting"}
            </Text>
          </Box>

          <Box textAlign="center" minW="180px">
            <Text fontSize="5xl" fontWeight="bold">
              VS
            </Text>

            <Text minH="40px" fontSize="2xl" fontWeight="bold">
              {getResultMessage(gameResult)}
            </Text>
          </Box>

          <Box
            textAlign="center"
            border="2px solid"
            borderRadius="xl"
            p={6}
            minW="220px"
          >
            <Text fontWeight="bold" fontSize="3xl">
              Computer
            </Text>

            <Text fontSize="6xl">
              {displayedComputerMove ? moveIcons[displayedComputerMove] : "?"}
            </Text>

            <Text fontSize="md">
              {slotMachineEffect
                ? "Choosing..."
                : displayedComputerMove
                  ? formatMoveName(displayedComputerMove)
                  : "Waiting"}
            </Text>
          </Box>
        </HStack>

        <HStack gap={3} justify="center" wrap="wrap">
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
      </VStack>
    </Box>
  );
}

export default App;
