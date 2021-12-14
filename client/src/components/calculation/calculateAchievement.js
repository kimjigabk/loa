export const calculateAchievement = (chars) => {
  let finished = 0;
  let totalPossible = 0;

  if (!chars) return;

  chars.map((char) => {
    if (char.itemLevel < 1430) totalPossible += 1;
    else if (char.itemLevel >= 1430 && char.itemLevel < 1475)
      totalPossible += 2;
    else totalPossible += 3;
    if (char.bossProgress) {
      finished += Object.keys(char.bossProgress).length;
    }
    return 0;
  });

  return [finished, totalPossible];
};
