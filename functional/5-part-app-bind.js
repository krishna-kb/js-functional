function log(level, msg) {
  console.log(`[${level}] ${msg}`);
}
const info = log.bind(null, "INFO"); // lock first arg
info("Server started"); // [INFO] Server started
