export const calculateTotalGoldEarned = (chars) => {
  let totalGold = 0;

  if (!chars) return;

  chars.map((char) => {
    if (char.bossProgress) {
      let arr = Object.values(char.bossProgress);
      const reg = /.*(G[0-9]+)/;
      arr.map((encoded) => {
        let matches = encoded.match(reg);
        if (matches[1]) {
          console.log(matches)
          totalGold += parseInt(matches[1].substring(1));
        }
        return 0;
      });
    }
    return 0;
  });

  return totalGold;
};
