const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// Demo: 3-second countdown, then a final message
(async () => {
  for (let i = 3; i > 0; i--) {
    console.log(`${i}…`);
    await delay(1_000);
  }
  await delay(500);
  console.log("🚀 Lift-off!");
})();
