const knex = require("../db/knex.js");

module.exports = {

  main: function(req, res) {
    res.render('index');
  }

}
