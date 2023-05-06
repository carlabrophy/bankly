/** Database setup for jobly. */
process.env.PGPASSWORD = "myPassword";
const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect();

module.exports = client;
