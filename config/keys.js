const { connect } = require("mongoose");

const server = process.env.MONGODB_SERVER;
const host = process.env.MONGODB_HOST;
const database = process.env.MONGODB_DATABASE;
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;

const connectionString = `${server}://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

module.exports = {
  mongoURI: connectionString,
};
