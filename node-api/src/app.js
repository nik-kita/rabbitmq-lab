const { Hono } = require("hono");

const app = new Hono();

app.all("/*", (c) => {
  return c.json({ hello: "world" });
});

module.exports = {
  app,
};
