//Connect Node to MySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  port: 3306,
  user: "b9b2fbfbefee30",
  password: "dcc51dd8",
  database: "heroku_1ccb1bce9722794"
});
//Makes the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
