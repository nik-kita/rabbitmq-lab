const { connect } = require("./connection");
const { gen_logger } = require("./logger");
const { queue_name } = require("./const.json");

module.exports = async () => {
  const log = gen_logger("receiver");
  const connection = await connect();
  const channel = await connection.createChannel();

  channel.consume(queue_name.hello_world, (msg) => {
    log(msg.content.toString());
  });

  return connection.close;
};
