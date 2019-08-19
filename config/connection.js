var mysql = require("mysql");
require("dotenv").config();

// Set up mysql connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection
    (process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection ({
        host: "localhost",
        port: 3306,
        user: "root"
        password: process.env.DB_PASSWORD,
        database: burgers_db
    })
}

// Connection to mysql
connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as id " +
    connection.threadId);
})

// export
module.exports = connection;