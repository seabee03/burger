var connection = require("./connection.js");

// this prints question marks according to the number in the array
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

var orm = {
    // displays all information from mysql
    select: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    //  adds new row into mysql
    create: function(table, cols, vals, cb) {
        // cols.toString() converts array to string values
        var queryString = `INSERT INTO ${table}(${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;connection.query(queryString, vals, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    // Updates existing rows in mysql
    update: function(table, condition, cb) {
        var queryString = `UPDATE ${table} SET devoured=true WHERE ${condtion}`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;