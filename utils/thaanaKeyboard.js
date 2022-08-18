const keyMap = {
  q: "ް",
  w: "އ",
  e: "ެ",
  r: "ރ",
  t: "ތ",
  y: "ޔ",
  u: "ު",
  i: "ި",
  o: "ޮ",
  p: "ޕ",
  a: "ަ",
  s: "ސ",
  d: "ދ",
  f: "ފ",
  g: "ގ",
  h: "ހ",
  j: "ޖ",
  k: "ކ",
  l: "ލ",
  z: "ޒ",
  x: "×",
  c: "ޗ",
  v: "ވ",
  b: "ބ",
  n: "ނ",
  m: "މ",
  Q: "ޤ",
  W: "ޢ",
  E: "ޭ",
  R: "ޜ",
  T: "ޓ",
  Y: "ޠ",
  U: "ޫ",
  I: "ީ",
  O: "ޯ",
  P: "÷",
  A: "ާ",
  S: "ށ",
  D: "ޑ",
  F: "ﷲ",
  G: "ޣ",
  H: "ޙ",
  J: "ޛ",
  K: "ޚ",
  L: "ޅ",
  Z: "ޡ",
  X: "ޘ",
  C: "ޝ",
  V: "ޥ",
  B: "ޞ",
  N: "ޏ",
  M: "ޟ",
  ",": "،",
  ";": "؛",
  "?": "؟",
  "<": ">",
  ">": "<",
  "[": "]",
  "]": "[",
  "(": ")",
  ")": "(",
  "{": "}",
  "}": "{",
};

export const thaanaKeyboard = (value) => {
  let dvVals = [];
  value.split("").map((v) => {
    if (keyMap[v]) {
      dvVals.push(keyMap[v]);
    }
    if (Object.values(keyMap).includes(v)) {
      dvVals.push(v);
    }
  });
  return dvVals.join("");
};
