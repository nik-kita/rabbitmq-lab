const { serve } = require("@hono/node-server");
const { app } = require("./app");

const PORT = 3000;

async function main() {
  serve({
    port: PORT,
    fetch: app.fetch,
  }, (info) => {
    console.info(info);
    console.info(`server is listening on http://${info.address}:${info.port}`);
  });
}

main();
