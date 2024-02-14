import amqp from "amqplib";
import { config } from "dotenv";

config();
const {
  RMQ_USERNAME = "guest",
  RMQ_PASSWORD = "guest",
  RMQ_PORT = 5672,
  RMQ_HOSTNAME = "localhost",
  RMQ_PROTOCOL = "amqp",
} = process.env;
const Q_HELLO_WORLD = "hello-world";

function connect() {
  return amqp.connect({
    protocol: RMQ_PROTOCOL,
    hostname: RMQ_HOSTNAME,
    port: +RMQ_PORT,
    username: RMQ_USERNAME,
    password: RMQ_PASSWORD,
  });
}

async function a_producer_consumer() {
  const connection = await connect();
  const channel = await connection.createChannel();
  await channel.assertQueue(Q_HELLO_WORLD);
  channel.sendToQueue(Q_HELLO_WORLD, Buffer.from("hi there!"));
  await channel.consume(
    Q_HELLO_WORLD,
    (msg) => console.log("a:", msg?.content.toString()),
  );
}
async function b_producer_consumer() {
  const connection = await connect();
  const channel = await connection.createChannel();
  await channel.consume(
    Q_HELLO_WORLD,
    (msg) => console.log("b:", msg?.content.toString()),
  );
}

Promise.all([
  a_producer_consumer(),
  b_producer_consumer(),
]);
