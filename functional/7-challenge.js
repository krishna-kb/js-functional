function once(fn) {
  // TODO
}

// demo
const init = once(() => console.log("Running heavy init…"));
init();
init(); // logs only once - no-op
