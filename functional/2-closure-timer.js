function makeTimer(label) {
  const start = Date.now();
  return () => console.log(`${label}: ${Date.now() - start}ms`);
}

const lap = makeTimer("DB seed");
// … heavy work …
lap(); // e.g. "DB seed: 842ms"
