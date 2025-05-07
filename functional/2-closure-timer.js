function makeTimer(label) {
  const start = Date.now();
  return () => console.log(`${label}: ${Date.now() - start}ms`);
}

const lap = makeTimer("DB seed");
export function busyBlock(seconds) {
  const end = performance.now() + seconds * 1000;
  while (performance.now() < end) {
    /* spin */
  }
}
busyBlock(2);
lap(); // e.g. "DB seed: 842ms"
