var connection = require("./connection")

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function (err, data){
            if (err)
            {
                throw new err("This is an err" + err )

            } 
            cb(data)
        })
    },
    insertOne: function(burgerName, cb){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}", false)`
        connection.query(queryString, function(err, data){
            if (err)
            {
                throw new err("This is an err" + err )

            } 
            cb(data)

        })
    },
    updateOne: function(burgerId, updateField, updateValue, cb) {
        var queryString = `UPDATE burgers 
        SET ${updateField}= ${updateValue} 
        WHERE id LIKE ${burgerId} `
        connection.query(queryString, function(err, data){
            if (err)
            {
                throw new err("This is an err" + err )

            } 
            cb(data)
        })
    }
}

module.exports = orm;