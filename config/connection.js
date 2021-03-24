//Connect Node to MySQL
var mysql = require("mysql");
let connection;
if(process.env.JAWSDB_URL && process.env.JAWSDB_URL.length > 0){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "swoo328",
    password: "progery68",
    database: "eat_hamburgers_db"
  });
}
//Makes the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
