var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", getMenu, getBurgers, renderBurgers);

router.post("/api/burger_menu", function(req, res) {
    burger.create("burger_menu", ["burger_name", "burger_description", "burger_price"],[req.body.name, req.body.description, req.body.price], function(data) {
        res.json({id: data.insertId});
    })
})

router.put("/api/burgers/:id?", function(req, res) {
    var condtion = "id=" + req.body.id;
    burger.update(condtion, function(data) {
        if (data.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

function getMenu(req, res, next) {
    burger.select("burger_menu", function(data) {
        req.menu = data;
        next();
    })
}

function getBurgers(req, res, next) {
    burger.select("burgers", function(data) {
        req.burger = data;
        next();
    })
}

function renderBurgers(req, res) {
    res.render("index", {
        menu: req.menu,
        burgers: req.burger
    })
}

module.exports = router;