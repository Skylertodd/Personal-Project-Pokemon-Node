const knex = require("../db/knex.js");

module.exports = {

  list: function(req, res) {
    knex('trainers')
    .then((results)=>{
      res.render('trainers', {trainer: results});
    })
  },
  show: function(req, res){
    knex('trainers')
    .where('id', req.params.id)
      .then((trainer)=>{

        knex('pokemon')
          .where('trainer_id', trainer[0].id)
          .then((trainer)=>{

            res.render('show', {trainer: trainer[0], trainer: trainer});
          })
      })
  },
}
