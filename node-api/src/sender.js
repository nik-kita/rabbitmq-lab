const { connect } = require("./connection");
const { queue_name } = require("./const.json");

module.exports = async () => {
  const connection = await connect();
  const channel = await connection.createChannel();
  const repeated_task = setInterval(async () => {
    await channel.sendToQueue(
      queue_name.hello_world,
      Buffer.from("hello world! " + Math.random()),
    );
  }, 3000);

  return async () => {
    clearInterval(repeated_task);
    await connection.close();
  };
};
