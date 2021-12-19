export const encodeBossProgress = (pb, boss) => {
  //   const state = {
  //     normal: false,
  //     hard: false,
  //     gateway: false,
  //     n1: false,
  //     n2: false,
  //     n3: false,
  //     h1: false,
  //     h2: false,
  //     h3: false,
  //     bus: false,
  //     goldEarned: 0,
  //   };
  let str = "";
  if (!pb) {
    console.log("undefined pb");
    return "";
  }
  console.log("encode boss..");

  if (pb.normal) {
    str += "N0";
  }

  if (pb.hard) {
    str += "H0";
  }
  if (pb.gateway) {
    let arrN = [];
    if (pb.n1) arrN.push("1");
    if (pb.n2) arrN.push("2");
    if (pb.n3) arrN.push("3");
    if (arrN.length > 0) {
      str += "N";
      if (boss === 1 && arrN.length === 2) {
        str += "0";
      } else if (boss !== 1 && arrN.length === 3) {
        str += "0";
      } else {
        if (arrN[0]) str += arrN[0];
        if (arrN[1]) str += arrN[1];
      }
    }
    let arrH = [];
    if (pb.h1) arrH.push("1");
    if (pb.h2) arrH.push("2");
    if (pb.h3) arrH.push("3");
    if (arrH.length > 0) {
      str += "H";
      if (boss === 1 && arrH.length === 2) {
        str += "0";
      } else if (boss !== 1 && arrH.length === 3) {
        str += "0";
      } else {
        if (arrH[0]) str += arrH[0];
        if (arrH[1]) str += arrH[1];
      }
    }
  }
  if (pb.bus) {
    str = str + "B" + pb.busfee;
  }
  //   if (pb.goldEarned) {
  //     str = str + "G" + pb.goldEarned;
  //   }
  return str;
};
