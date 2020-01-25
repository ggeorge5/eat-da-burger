var mysql = require("mysql");
require("dotenv").config();

let config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burga_db"
}

if (process.env.NODE_ENV === "prodcution"){
  config = process.env.JAWSDB_URL;
}
var connection = mysql.createConnection(config);






connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;