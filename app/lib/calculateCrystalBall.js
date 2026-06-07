export function calculateCrystalBall(user, official, scoring) {
  let score = 0;

  Object.keys(official || {}).forEach((key) => {
    if (
      user?.[key] !== undefined &&
      official?.[key] !== undefined &&
      user[key] === official[key]
    ) {
      score += scoring[key] || 0;
    }
  });

  return score;
}