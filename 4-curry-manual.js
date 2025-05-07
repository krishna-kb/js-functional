const add = (a) => (b) => a + b;
const add2 = add(2); // (b) => 2 + b
console.log(add2(5)); // 7
