export type PlayerMove = "rock" | "paper" | "scissors" | "lizard" | "spock";

export type GameResult = "win" | "lose" | "draw";

export type Score = {
    player: number,
    computer: number,
    draws: number
}