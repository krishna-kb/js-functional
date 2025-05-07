const delay = (ms) => (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// Demo: 3-second countdown, then a final message
(async () => {
  for (let i = 3; i > 0; i--) {
    console.log(`${i}…`);
    await delay(1_000)();
  }
  const msg = await delay(500)("🚀 Lift-off!");
  console.log(msg);
})();
