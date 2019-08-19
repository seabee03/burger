var orm = require("../config/orm.js");

var burger = {
    select: function(table, cb) {
        orm.select(table, function(result) {
            cb(result);
        })
    },

    create: function(table, cols, vals, cb) {
        orm.create(table, cols, vals, function(result) {
            cb(result);
        })
    },

    update: function(condition, cb) {
        orm.update("burgers", condition, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;