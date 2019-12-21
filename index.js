const server = require('./server')

const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 4000;
server.listen(HOST, PORT, () => {
  console.log(`Listening on ${HOST}:${PORT}...`);
});