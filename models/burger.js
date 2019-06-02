var orm = require("../config/orm")

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burgerName, cb) {
      orm.insertOne(burgerName, function(res) {
        cb(res);
      });
    },
    update: function(burgerId, updatedCol, updatedValue, cb) {
      orm.updateOne(burgerId, updatedCol, updatedValue, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;