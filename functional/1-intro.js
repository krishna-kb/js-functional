/* JavaScript Basics Cheat‑Sheet — primitives, function syntax, call/apply/bind.
   Copy‑friendly reference for workshop participants. */

// ─── Primitive Data Types ─────────────────────────────────────────────
const str = "Hello"; // String
const num = 42; // Number (also Infinity, NaN)
const big = 9007199254740991n; // BigInt
const bool = true; // Boolean
const sym = Symbol("id"); // Symbol
const undef = undefined; // Undefined
const nul = null; // Null (typeof null === "object")

// ─── Structural / Reference Types ────────────────────────────────────
const obj = { x: 1 }; // Object literal
const arr = [1, 2, 3]; // Array (object subtype)
function fn() {
  return "callable";
} // Function (callable object)
const date = new Date(); // Built‑in object example

// ─── Function Syntax Variants ────────────────────────────────────────

// 1. Function Declaration (named)
function add(a, b) {
  return a + b;
}

// 2. Function Expression (anonymous or named)
const multiply = function (a, b) {
  return a * b;
};

// 3. Arrow Function (lexical `this`, concise)
const divide = (a, b) => {
  return a / b;
};

// 4. Concise Arrow with implicit return
const square = (n) => n * n;

// 5. Immediately‑Invoked Function Expression (IIFE)
(function greet(name) {
  console.log(`Hi, ${name}!`);
})("Team");

// 6. Method Shorthand inside Object Literals
const calc = {
  mod(a, b) {
    return a % b;
  },
};

// ─── call / apply / bind Examples ────────────────────────────────────
function show(label) {
  console.log(`${label}:`, this.value);
}

const ctx1 = { value: "Ctx1" };
const ctx2 = { value: "Ctx2" };

// call – invoke, passing `this` and args list
show.call(ctx1, "using call"); // → "using call: Ctx‑1"

// apply – same, but args array
show.apply(ctx2, ["using apply"]); // → "using apply: Ctx‑2"

// bind – returns new fn with bound `this` (+ optional preset args)
const bound = show.bind(ctx1, "with bind");
bound(); // → "with bind: Ctx‑1"

// ─── End of cheat‑sheet ──────────────────────────────────────────────

// Playground
