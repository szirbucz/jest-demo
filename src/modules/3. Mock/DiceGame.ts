import { throwDie } from "./DiceService";

export type DiceGameResult = {
    win: boolean;
    playerScore: number;
    opponentScore: number;
}

export function play() : DiceGameResult {
    const myScore = throwDie();
    const opponentScore = throwDie();
    return {
        win: myScore > opponentScore,
        playerScore: myScore,
        opponentScore: opponentScore
    };
}