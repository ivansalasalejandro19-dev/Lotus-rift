import { calculateBracket } from "./calculateBracket";
import { calculateCrystalBall } from "./calculateCrystalBall";

export function calculateScore(userPickem, officialResults, scoring) {
  let score = 0;

  // Bracket
  score += calculateBracket(
    userPickem.bracket,
    officialResults.bracket,
    scoring
  );

  // Crystal Ball
  score += calculateCrystalBall(
    userPickem.crystalBall,
    officialResults.crystalBall,
    scoring
  );

  return score;
}