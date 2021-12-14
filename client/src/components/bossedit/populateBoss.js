export const populateBoss = (bp, bossNum) => {
  const state = {
    normal: false,
    hard: false,
    gateway: false,
    n1: false,
    n2: false,
    n3: false,
    h1: false,
    h2: false,
    h3: false,
    bus: false,
    busfee: 0,
    goldEarned: 0,
  };

  if (!bp) {
    console.log("undefinedd");
    return state;
  } else if (!bp[bossNum]) {
    console.log("undefinedd Boss");
    return state;
  }
  console.log("populate boss..");
  console.log(bp);
  const reg = /(N[0-9]{0,3})*(H[0-9]{0,3})*(B[0-9]+)*(G[0-9]+)*/;
  const matches = bp[bossNum].match(reg);
  if (matches[1] && matches[1].substring(1, 2) === "0") {
    state.normal = true;
  }
  if (matches[2] && matches[2].substring(1, 2) === "0") {
    state.hard = true;
  }

  if (
    (matches[1] && matches[1].substring(1, 2) > 0) ||
    (matches[2] && matches[2].substring(1, 2) > 0)
  ) {
    console.log("partial");
    state.gateway = true;
    if (matches[1]) {
      if (matches[1].substring(1, 2)) {
        let gateno = matches[1].substring(1, 2);
        let str = "n" + gateno;
        state[str] = true;
      }
      if (matches[1].substring(2, 3)) {
        let gateno = matches[1].substring(2, 3);
        let str = "n" + gateno;
        state[str] = true;
      }
    }
    if (matches[2]) {
      if (matches[2].substring(1, 2)) {
        let gateno = matches[2].substring(1, 2);
        let str = "h" + gateno;
        state[str] = true;
      }
      if (matches[2].substring(2, 3)) {
        let gateno = matches[2].substring(2, 3);
        let str = "h" + gateno;
        state[str] = true;
      }
    }
  }
  if (matches[3]) {
    state.bus = true;
    state.busfee = matches[3].substring(1);
  }
  if (matches[4]) {
    state.goldEarned = matches[4].substring(1);
  }
  return state;
};
