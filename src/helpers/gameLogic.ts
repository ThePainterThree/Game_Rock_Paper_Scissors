import type { GameResult, PlayerMove } from "../types/game";

export const moves: PlayerMove[] = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
];

export const winningLogic: Record<PlayerMove, PlayerMove[]> = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  spock: ["scissors", "rock"],
  lizard: ["spock", "paper"],
};

export function getRandomComputerMove(): PlayerMove {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

export function andTheWinnerIs(
  playerMove: PlayerMove,
  computerMove: PlayerMove,
): GameResult {
  if (playerMove === computerMove) {
    return "draw";
  }
  if (winningLogic[playerMove].includes(computerMove)) {
    return "win";
  }
  return "lose";
}
