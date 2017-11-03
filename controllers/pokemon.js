const knex = require("../db/knex.js");

module.exports = {

main: function(req, res) {
      knex('pokemon')
      .then((results)=>{
        res.render('pokemon', {pokemon: results});
    })
  },

  show: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .then((pokemon)=>{

      knex('trainers')
        .where('id', pokemon[0].trainer_id)
        .then((trainer)=>{
          res.render('trainers', {pokemon: pokemon[0], trainer: trainer[0]});
        })
    })
  },

  new: function(req, res) {
    res.render('new')
  },

  add: function(req, res){
    knex('pokemon')
      .insert({
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        in_gym: req.body.in_gym,
        cp: req.body.cp
      }, "*")
      .then(()=>{
        res.redirect(`/pokemon`)
      })
      .catch((err)=>{
          console.log(err)
    })
  },

  delete: function(req, res){
    knex('pokemon')
      .del()
      .where('id', req.params.id)
      .then(()=>{
        res.redirect(`/pokemon`);
      })
  },

  edit: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
      .then((pokemon)=>{

        knex('trainers')
          .where('id', pokemon[0].trainer_id)
            .then((trainer)=>{

              res.render('trainers', {pokemon: pokemon[0], trainer: trainer});
            })
    })
  },

  change: function(req, res){
    knex('pokemon')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/show/' + req.params.id);
      })
      .catch((err)=>{
          console.log(err)
      })
  }
}
