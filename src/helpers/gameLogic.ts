import type { GameResult, PlayerMove } from "../types/game";

export const moveIcons: Record<PlayerMove, string>  = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
  lizard: "🦎",
  spock: "🖖",
};

export const moves = Object.keys(moveIcons) as PlayerMove[]
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

  export function getResultMessage(result: GameResult | null) {
    if (result === "win") return "You won!";
    if (result === "lose") return "Computer won!";
    if (result === "draw") return "It's a draw!";
    return "Choose your move";
  }
