const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  secretkey: "secret",
  serviceName: process.env.SERVICE_NAME,
  dbUrl:
    "mongodb+srv://latihan:latihan@cluster0.1tk5qit.mongodb.net/?retryWrites=true&w=majority",
  // dbHost: process.env.DB_HOST,
  // dbPort: process.env.DB_PORT,
  // dbUser: process.env.DB_USER,
  // dbPass: process.env.DB_PASS,
  // dbName: process.env.DB_NAME,
};
