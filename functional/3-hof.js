const words = ["rocket", "science", "is", "fun"];
const result = words
  .map((w) => w.toUpperCase()) // ["ROCKET", …]
  .filter((w) => w.length > 3) // keep long words
  .reduce((acc, w) => `${acc} ${w}!`, ""); // " ROCKET SCIENCE!"
console.log(result.trim());

// Repeat
const repeat = (n, fn) => {
  // fn is a callback (HOF)
  for (let i = 0; i < n; i++) fn(i);
};
repeat(3, (i) => console.log(`Ping ${i}`));
