const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.redirect("/pokemon");
  },

  // GET LISTING OF ALL POKEMON AND THEIR PROPERTIES
  getAll: function(req, res) {
    knex('pokemon').then((result) => {

      res.render('pokemon', {pokemon: result})
    })
    .catch((err) => {
      console.error(err)
    });
  },

  //SHOW LISTING OF ONE POKEMON AND IT 'S PROPERTIES
  showAll: function(req, res) {
    knex('pokemon')
      .where('id', req.params.id)
      .then((pokemon)=>{

        knex('trainers')
          .where('id', pokemon[0].trainer_id)
          .then((trainerName)=>{

            res.render('profile', {pokemonProperties: pokemon[0], trainer: trainerName[0]});
          })
      })
  },

  //CREATE PAGE
  create: function(req, res) {
    res.render('create')
  },

  //CREATE / ADD NEW POKEMON
  createNew: function (req, res) {
    knex('pokemon')
      .insert({
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp,
        in_gym: req.body.in_gym
      },'*')
      .then(()=>{
        res.redirect('/pokemon');
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //DELETE POKEMON FROM PAGE
  delete: function(req, res){

    knex('pokemon')
      .del()
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/pokemon');
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //EDIT FORM USED TO MAKE CHANGES IN THE POKEMON PROPERTIES
  editNew: function(req, res){
    knex('pokemon')
      .where('id', req.params.id)
      .then((pokemon)=>{

        knex('trainers')
        .where('id', pokemon[0].trainer_id)
        .then((trainers)=>{

          res.render('editPokemon', {pok: pokemon[0], trainer: trainers[0]});
        })
    })
  },

  //UPDATE POKEMON PROPERTIES
  update: function(req, res){
    knex('pokemon')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/show/'+req.params.id);
      })
      .catch((err) => {
        console.error(err)
      });
  },
}
