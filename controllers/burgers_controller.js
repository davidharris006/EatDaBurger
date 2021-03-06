var express = require("express")
var burger = require("../models/burger.js")


var router = express.Router();



router.get("/", function(req, res) {
  burger.all(function(data) {
var hbsObject = {
  burgers: data
};

    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  const burgerName = toString(req.body.name)

  console.log(burgerName);
  burger.create(req.body.name, function(result) {
    
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
const burgerId = req.params.id

  console.log("condition", condition);

  burger.update(burgerId, "devoured", true, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;