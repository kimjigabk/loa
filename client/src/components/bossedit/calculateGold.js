export const calculateGold = (pb, boss) => {
  let gold = 0;
  if (boss === 1) {
    if (pb.normal) gold = 3300;
    if (pb.hard) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 800;
      if (pb.n2) gold += 2500;
      if (pb.h1) gold += 1000;
      if (pb.h2) gold += 3500;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === 2) {
    if (pb.normal) gold = 3300;
    if (pb.hard) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 500;
      if (pb.n2) gold += 600;
      if (pb.n3) gold += 2200;
      if (pb.h1) gold += 500;
      if (pb.h2) gold += 1000;
      if (pb.h3) gold += 3000;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === 3) {
    if (pb.normal) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 500;
      if (pb.n2) gold += 1000;
      if (pb.n3) gold += 3000;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === 4) {
    if (pb.normal) gold = 7500;
    if (pb.hard) gold = 9500;
    if (pb.gateway) {
      if (pb.n1) gold += 4500;
      if (pb.n2) gold += 1500;
      if (pb.n3) gold += 1500;
      if (pb.h1) gold += 5500;
      if (pb.h2) gold += 2000;
      if (pb.h3) gold += 2000;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
};
