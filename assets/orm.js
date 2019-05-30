var connection = require("./connection")

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function (err, data){
            if (err) throw err

        })
    },
    insertOne: function(burgerName){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}, false)`
        connection.query(queryString, function(err, data){
            if (err) throw err

        })
    },
    updateOne: function(burgerId, updateField, updateValue) {
        var queryString = `UPDATE burgers 
        SET ${updateField}= ${updateValue} 
        WHERE id LIKE ${burgerId} `
        connection.query(queryString, function(err, data){
            if (err) throw err
        })
    }
}

module.exports = orm;