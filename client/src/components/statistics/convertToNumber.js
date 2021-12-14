export const convertToNumber = (a) => {
  // const a = ["10/15", "7/15"];
  const reg = /([0-9]+)(\/)([0-9]+)/;

  const arr = a.map((item) => {
    let s = item.match(reg);
    return parseInt(s[1]) / parseInt(s[3]);
  });

  return arr;
};
