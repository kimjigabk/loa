export const totalPercentage = (a) => {
  if (!a) return;
  const reg = /([0-9]+)(\/)([0-9]+)/;

  const top = a.map((item) => {
    let s = item.match(reg);
    return parseInt(s[1]);
  });

  const bottom = a.map((item) => {
    let s = item.match(reg);
    return parseInt(s[3]);
  });
  const toptotal = top.reduce((acc, cur) => {
    return acc + cur;
  });
  const bottomtotal = bottom.reduce((acc, cur) => {
    return acc + cur;
  });
  return [toptotal, bottomtotal];
};
