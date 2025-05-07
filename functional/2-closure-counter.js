function makeCounter() {
  let count = 0; // private state
  return function () {
    return ++count; // inner fn *closes over* `count`
  };
}

// demo
const c1 = makeCounter();
console.log(c1());
console.log(c1());

// Guess
const c2 = makeCounter();
console.log(c2());
