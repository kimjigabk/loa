import { ARGOS, BALTAN, BIA, KOKOU, ABREL } from "../bossedit/bossCode";
export const calculateGold = (pb, boss, lvl) => {
  let gold = 0;
  if (boss === ARGOS) {
    if (pb.normal && lvl < 1475) gold += 1600;
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }

  if (boss === BALTAN) {
    if (pb.normal) gold = 2500;
    if (pb.hard) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 500;
      if (pb.n2) gold += 2000;
      if (pb.h1) gold += 1000;
      if (pb.h2) gold += 3500;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === BIA) {
    if (pb.normal) gold = 2500;
    if (pb.hard) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 500;
      if (pb.n2) gold += 600;
      if (pb.n3) gold += 1400;
      if (pb.h1) gold += 1000;
      if (pb.h2) gold += 1000;
      if (pb.h3) gold += 2500;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === KOKOU) {
    if (pb.normal) gold = 4500;
    if (pb.gateway) {
      if (pb.n1) gold += 1000;
      if (pb.n2) gold += 1000;
      if (pb.n3) gold += 2500;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
  if (boss === ABREL) {
    if (pb.normal) gold = 8500;
    if (pb.hard) gold = 10500;
    if (pb.gateway) {
      if (pb.n1) gold += 4500;
      if (pb.n2) gold += 1500;
      if (pb.n3) gold += 2500;
      if (pb.h1) gold += 5500;
      if (pb.h2) gold += 2000;
      if (pb.h3) gold += 3000;
    }
    if (pb.bus) gold += parseInt(pb.busfee);
    return gold;
  }
};
