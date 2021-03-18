var express = require("express");

var router = express.Router();

const hamburger = require("../models/hamburger.js");

//router.get
router.get("/", function(req, res) {
    hamburger.all(function(data) {
      var hbsObject = {
        hamburger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
//router.post
//router.delete

module.exports = router;