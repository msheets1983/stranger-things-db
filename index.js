const server = require("./api/server.js");

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
  console.log(`\n\t** Server is listening on port ${PORT} **\n`);
});
