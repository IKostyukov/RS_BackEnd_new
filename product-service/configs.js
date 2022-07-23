const dotenv = require('dotenv').config()

console.log(process.env.PG_USERNAME)

module.exports = async () => {
  return Object.assign(
    {},
    process.env,
  );
};