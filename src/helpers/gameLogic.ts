import type { PlayerMove } from "../types/game";

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
 lizard: ["spock", "paper"]
}
