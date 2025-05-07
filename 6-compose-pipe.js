const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const trim = (s) => s.trim();
const lower = (s) => s.toLowerCase();
const slugify = (s) => s.replace(/\s+/g, "-");

const sanitize = pipe(trim, lower, slugify);
console.log(sanitize("  Hello World  ")); // "hello-world"
