const amqp = require("amqplib");

module.exports = {
  connect() {
    return amqp.connect();
  },
};
