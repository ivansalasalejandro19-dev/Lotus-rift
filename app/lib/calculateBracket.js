export function calculateBracket(user, official, scoring) {
  let score = 0;

  if (user.champion === official.champion) {
    score += scoring.champion;
  }

  Object.keys(official.round16 || {}).forEach((key) => {
    if (user.round16?.[key] === official.round16[key]) {
      score += scoring.round16;
    }
  });

  Object.keys(official.quarters || {}).forEach((key) => {
    if (user.quarters?.[key] === official.quarters[key]) {
      score += scoring.quarterfinal;
    }
  });

  Object.keys(official.semis || {}).forEach((key) => {
    if (user.semis?.[key] === official.semis[key]) {
      score += scoring.semifinal;
    }
  });

  return score;
}